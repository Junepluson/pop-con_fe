import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Main from "./pages/MainPage/Main";
import Welcome from "./pages/Welcome/Welcome";
import Search from "./pages/Search/Search";
import Test from "./pages/Test/Test";
import CardTest from "./pages/Test/CardTest";
import Mypage from "./pages/MyPage/MypageMain";
import Myreservation from "./pages/MyPage/Myreservation";
import MypopLike from "./pages/MyPage/MypopLike";
import Mypoprequest from "./pages/MyPage/Mypoprequest";
import MyBrandLike from "./pages/MyPage/MyBrandLike";
import KnowList from "./pages/MyPage/KnowList";
import Introduce from "./pages/MyPage/Introduce";
import Cate from "./pages/ShowPopupCardPage/Cate";
import Ing from "./pages/ShowPopupCardPage/Ing";
import Requesting from "./pages/ShowPopupCardPage/Requesting";
import ShowCate from "./pages/CategoryPage/ShowCate";
import BrandIntroduce from "./pages/BrandIntroduce/BrandIntroduce";
import ArtistIntroduce from "./pages/ArtistIntroduce/ArtistIntroduce";
import LogoWelcome from "./pages/LogoWelcome/LogoWelcome";
import PopupPost from "./pages/PopupPost/PopupPost";
import NewBrand from "./pages/MainPlusPage/NewBrand";
import NewArtist from "./pages/MainPlusPage/NewArtist";
import Weekly from "./pages/MainPlusPage/PopularPopup";
import PostList from "./pages/MainPlusPage/PostList";
import Login from "./pages/Login/Login";
import Resister from "./pages/Login/Resister";
import Searchresult from "./pages/Search/Searchresult";
import { SearchProvider } from "./Components/SearchBar/SearchContext";
import Service from "./pages/MyPage/Service";
import PopupInfo from "./pages/PopupInfo/PopupInfo";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import Chatbot from "./pages/Chatbot/Chatbot";
import MyInfo from "./pages/MyPage/MyInfo";
import AdminMain from "./pages/MainPage/AdminMain";
import PopupSpace from "./pages/MainPlusPage/PopupSpace";
import Popularpopup from "./pages/MainPlusPage/PopularPopup";
import PopupHere from "./pages/MainPlusPage/PopupHere";
import PopupSpaceItem from "./pages/MainPlusPage/PopupSpaceItem";
import SpaceItemInfo from "./pages/MainPlusPage/SpaceItemInfo";
import SpaceItemIntro from "./pages/MainPlusPage/SpaceItemIntro";
import Modal from "./Components/Modal/Modal";
import GuidePage from "./pages/Guide/Guide";

import BrandIntro from "./pages/BrandIntroduce/BrandIntro";
import BrandInfo from "./pages/BrandIntroduce/BrandInfo";
import BrandPost from "./pages/BrandIntroduce/BrandPost";
import ChatPage from "./pages/Chatbot/Chatpage";
import Kakaomap2 from "./Components/Kakaomap/Kakaomap2";
import RequestComplete from "./pages/PopupInfo/RequestComplete";
import PopupBooking from "./pages/PopupInfo/PopupBooking";
import CardList from "./pages/Card/CardList";
import AddCard from "./pages/Card/AddCard";

function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SearchProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/AdminMain" element={<AdminMain />} />

            <Route path="/popupspace" element={<PopupSpace />}></Route>

            <Route path="/popupspace/:spaceId" element={<PopupSpaceItem />}>
              <Route path="" element={<SpaceItemIntro />}></Route>
              <Route path="info" element={<SpaceItemInfo />}></Route>
            </Route>

            <Route path="" element={<LogoWelcome />} />

            <Route path="/CardTest" element={<CardTest />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/test" element={<Test />} />
            <Route path="/Guide" element={<GuidePage />} />

            <Route path="/main" element={<Main />}></Route>
            <Route path="/main/:cateId" element={<Cate />}>
              <Route path="" element={<Requesting />}></Route>
              <Route path="ing" element={<Ing />}></Route>
            </Route>

            <Route path="/category" element={<ShowCate />}></Route>
            <Route path="/newbrand" element={<NewBrand />}></Route>
            <Route path="/newartist" element={<NewArtist />}></Route>
            <Route path="/weekly" element={<Weekly />}></Route>
            <Route path="/search" element={<Search />} />
            <Route path="/search/result" element={<Searchresult />} />

            <Route path="/brand/:brandId" element={<BrandIntroduce />}>
              <Route path="" element={<BrandIntro />}></Route>
              <Route path="info" element={<BrandInfo />}></Route>
              <Route path="post" element={<BrandPost />}></Route>
            </Route>

            <Route path="/Mypage" element={<Mypage />} />
            <Route path="/Mypage/Myreservation" element={<Myreservation />} />
            <Route path="/Mypage/MypopLike" element={<MypopLike />} />
            <Route path="/Mypage/Mypoprequest" element={<Mypoprequest />} />
            <Route path="/Mypage/MyBrandLike" element={<MyBrandLike />} />
            <Route path="/Mypage/Knowlist" element={<KnowList />} />
            <Route path="/Mypage/introduce" element={<Introduce />} />
            <Route path="/Mypage/Service" element={<Service />} />
            <Route path="/Mypage/Myinfo" element={<MyInfo />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Resister" element={<Resister />} />

            <Route path="/artist" element={<ArtistIntroduce />} />

            <Route path="/postList" element={<PostList />} />
            <Route path="/popupPost" element={<PopupPost />} />
            <Route path="/popupinfo/:brandId" element={<PopupInfo />} />

            <Route
              path="/popupbooking/:brandId"
              element={<PopupBooking />}
            ></Route>

            <Route path="/Chatbot" element={<ChatPage />} />
            <Route path="/popularpopup" element={<Popularpopup />} />
            <Route path="/popuphere" element={<PopupHere />} />
            <Route path="/maptest" element={<Kakaomap2 />}></Route>

            <Route path="/CardList" element={<CardList />}></Route>
            <Route path="/CardList/AddCard" element={<AddCard />}></Route>
          </Route>
        </Routes>
      </SearchProvider>
    </BrowserRouter>
  );
}
export default Router;
