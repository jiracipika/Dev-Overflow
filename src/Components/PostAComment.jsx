import React, { useState } from 'react';

const PostAComment = ({ onCommentSubmit }) => {
    const [commentText, setCommentText] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!commentText.trim()) {
            setError("Comment cannot be empty");
            return;
        }

        setIsLoading(true);
        setError(null);

        try {
            // Here you would typically make an API call to submit the comment
            // For now, we'll just call the onCommentSubmit callback
            await onCommentSubmit(commentText);
            setCommentText("");
        } catch (err) {
            setError("Failed to post comment. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-[#1A1B20] rounded-lg p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
                <textarea
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="Write your comment..."
                    className="w-full p-4 bg-[#202128] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={4}
                />
                {error && (
                    <p className="text-red-400 text-sm">{error}</p>
                )}
                <div className="flex justify-end">
                    <button
                        type="submit"
                        disabled={isLoading || !commentText.trim()}
                        className={`px-6 py-2 rounded-lg ${
                            isLoading || !commentText.trim()
                                ? "bg-gray-600 cursor-not-allowed"
                                : "bg-custom-gradient hover:opacity-90"
                        }`}
                    >
                        {isLoading ? "Posting..." : "Post Comment"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PostAComment;