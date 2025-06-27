import React from 'react'

const MessageBox = ({
  text,
  isSending,
  type = 'text',
  file,
  sentBubbleColor = '#8aadf4',
  receivedBubbleColor = 'white',
  sentTextColor = 'white',
  receivedTextColor = 'black'
}) => {
  const renderFilePreview = () => {
    if (!file) return null;

    const { name, type, preview, data } = file;
    
    // Get file extension
    const extension = name.split('.').pop()?.toLowerCase();
    
    // Determine file type category
    const isImage = ['jpg', 'jpeg', 'png', 'gif'].includes(extension);
    const isVideo = ['mp4', 'mov', 'avi'].includes(extension);
    const isAudio = ['mp3', 'wav', 'ogg'].includes(extension);
    
    // Create appropriate preview
    switch (true) {
      case isImage:
        return (
          <img 
            src={preview || data} 
            alt={name} 
            className='max-w-[200px] rounded-lg'
          />
        );
      case isVideo:
        return (
          <video 
            src={preview || data} 
            className='max-w-[200px] rounded-lg'
            controls
          />
        );
      case isAudio:
        return (
          <audio 
            src={preview || data} 
            className='max-w-[200px]'
            controls
          />
        );
      default:
        return (
          <div className='flex items-center gap-[10px] p-[10px] bg-[#f0f0f0] rounded-lg'>
            <span className='text-[#666]'>{name}</span>
            <span className='text-[#888] text-[12px]'>
              {Math.round(file.size / 1024)} KB
            </span>
          </div>
        );
    }
  };

  return (
    <div className={`flex gap-[20px] mb-5 ${isSending ? 'flex-row-reverse' : ''}`}>
      <div className='flex flex-col text-[gray] font-[300]'>
        <img className='w-[40px] h-[40px] rounded-[50%] object-cover' src="" alt="" />
        <span>Just Now</span>
      </div>
      <div className={`max-w-[80%] flex flex-col gap-[10px] ${isSending ? 'items-end' : ''}`}>
        {type === 'file' ? (
          <div className={`p-[10px] rounded-[10px] ${isSending ? 'bg-[#8aadf4]' : 'bg-[#f0f0f0]'}`}>
            {renderFilePreview()}
          </div>
        ) : (
          <p className={`px-5 py-2.5 rounded-[0px_10px_10px_10px] max-w-max ${isSending 
            ? `bg-[${sentBubbleColor}] text-[${sentTextColor}] rounded-[10px_0px_10px_10px]` 
            : `bg-[${receivedBubbleColor}] text-[${receivedTextColor}] rounded-[0px_10px_10px_10px]`
          }`}>
            {text}
          </p>
        )}
      </div>
    </div>
  )
}

export default MessageBox