import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Components/Layout"
import Home from "./Pages/Home"
import Signup from "./Pages/SignUp"
import SignIn from "./Pages/SignIn"
import Profile from "./Pages/Profile"
import Schedule from "./Pages/Schedule"
import EditProfile from "./Pages/EditProfile"
import Collections from "./Pages/Collections"
import AskAQuestion from "./Pages/AskAQuestion"
import QuestionView from "./Pages/QuestionView"
import Notifications from "./Pages/Notifications"
import ProtectedRoute from "./Components/ProtectedRoute"
import PersistLogin from "./Components/PersistLogin"
import OtherUserProfile from "./Pages/OtherUserProfile"
import Blog from "./Pages/Blog"
import BlogView from "./Pages/BlogView"
import Communities from "./Pages/Communities"
import CommunitiesByTags from "./Pages/CommunitiesByTags"
import Tags from "./Pages/Tags"
import TagSection from "./Pages/TagSection"
import Messages from "./Pages/Messages"
import ForgotPassword from "./Pages/ForgotPassword"
import ThankYouPassword from "./Pages/ThankYouPassword"
import ResetPassword from "./Pages/ResetPassword"
import { TagsProvider } from './context/TagsContext';

function App() {

  return (
    <>
    <BrowserRouter>
      <TagsProvider>
        <Routes>
          {/*<Route element={<PersistLogin />}>*/}
          {/*<Route element={<ProtectedRoute />}>*/}
            <Route path="/" element={<Layout />}>
              <Route path="" element={<Home />} />
              <Route path="collections" element={<Collections />} />
              <Route path="ask-a-question" element={<AskAQuestion />} />
              <Route path="profile" element={<Profile />} />
              <Route path="/editProfile" element={<EditProfile />} />
              <Route path="/:id" element={<OtherUserProfile />} />
              <Route path="communitiesbytags" element={<CommunitiesByTags/>} />
              <Route path="communities/:TagName" element={<Communities />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/notifications" element={<Notifications/>} />
              <Route path="/tags" element={<Tags />} />
              <Route path="/tagSection/:id" element={<TagSection />} />
              <Route path="/blog" element={<Blog/>} />
              <Route path="/blogview/:id" element={<BlogView/>} />
              <Route path="/messages" element={<Messages/>} />
              <Route path="/question/:id" element={<QuestionView/>} />
            </Route>
          {/*</Route>*/}
        {/*</Route>*/}
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/thankyoupassword" element={<ThankYouPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
      </Routes>
      </TagsProvider>
    </BrowserRouter>
      
    </>
  )
}

export default App