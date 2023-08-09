import React from "react";
import { styled } from "styled-components";
import Header from "../../Components/Header/Header";
import Cardup from "../../Components/Brand, ArtistCard/Cardup";
import Carddown2 from "../../Components/Brand, ArtistCard/Carddown2";
import Popinfodetail from "../../Components/Brand, ArtistCard/Popinfodetail";
import Typo from "../../assets/Typo";
import Footer from "../../Components/Footer/Footer";
import { useEffect } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import Kakaomap2 from "../../Components/Kakaomap/Kakaomap2";
import Margin from "../../Components/Margin/Margin";
import RequestModal from "../../Components/Modal/PopRequestModal";
import img1 from "../../assets/Icons/Card/PopupCardimg1.png";
import Calendar from "../../Components/Calendar/Calendar";
import CustomTimeSlot from "../../Components/Calendar/CustomTimeSlot";
import Choose from "../../Components/Calendar/Choose";
import Modal from "react-modal";
import toast, { Toaster } from "react-hot-toast";
import RequestComplete from "./RequestComplete";
import ss from "../../assets/Icons/Card/NewJeans.jpg";

const Wrapper = styled(motion.div)`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  width: 100%;
  position: relative;
`;
const PopupinfoImg = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
`;
const PopupButton = styled.button`
  width: 70%;
  height: 48px;
  background-color: #ec7538;
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const Form = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 10px;
  justify: center;
  p {
    text-align: center;
  }
  margin: 25px 0px;
`;

const Period = styled(Form)``;
const OperateTime = styled(Form)``;
const Space = styled(Form)``;
const Map = styled(Form)``;

const RequestWrapper = styled(motion.div)`
  width: 100%;
  height: 400px;

  transform-origin: top center;
  display: flex;
  justify-content: center;
`;
const requestvariants = {
  hidden: { scaleY: 0 },
  visible: { scaleY: 1 },
  exit: { scaleY: 0 },
};
const GetMaptext = styled.p`
  width: 50%;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 0px 3px 3px -3px rgba(0, 0, 0, 0.3);
  padding-bottom: 10px;
  opacity: 0.8;
  cursor: pointer;
`;
const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;
const PopupSpace = styled.div`
  width: 90%;
`;
const Detail = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 0px;
`;
const DetailTime = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;
  margin-left: 3%;
  margin-top: 3%;
`;
const ImageBox = styled.div`
  width: 100%;
  position: absolute;
  top: 10%;
`;

const renderImages = (imagePaths) => {
  return imagePaths.map((imagePath, index) => (
    <Image key={index} src={imagePath} alt="팝업 이미지" />
  ));
};

const BookingTwo = () => {
  //백엔드에서 받아온 이미지 경로 배열 - 데이터 받아서 변수로 선언해야 할 듯
  const { brandId } = useParams();

  const navigate = useNavigate();

  const [btnclicked, setBtnclicked] = useState(false);
  const [requestbtnclikced, setRequestbtnclicked] = useState(false);

  const [isYes, setIsYes] = useState(false);

  const imagePathsFromBackend = [
    "이미지1의_경로.jpg",
    "이미지2의_경로.jpg",
    // 추가적인 이미지들의 경로
  ];
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const requestbtnani = useAnimation();
  const handleTimeSlotChange = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
  };
  useEffect(() => {
    if (btnclicked) {
      requestbtnani.start("visible");
    } else {
      requestbtnani.start("hidden");
    }
  }, [btnclicked]);

  const yestoast = () =>
    toast.success("팝업 신청이 완료되었습니다.", {
      duration: 6000,
      style: {
        marginTop: 50,
      },
    });

  useEffect(() => {
    if (isYes) {
      setTimeout(() => yestoast(), 1000);
    }
  }, [isYes]);

  return (
    <Wrapper>
      <Header left="logo" right={["login", "search"]} />
      <Popinfodetail // 팝업의 본문 내용 컴포넌트 (운영 기간, 시간, 기획/운영, 키워드)
        firsttitle={null}
        bodytitle={null}
        bodyText={
          "샤넬의 모든 컬러는 코드로 정의됩니다.\n샤넬 코드 컬러 팝업 스토어에 방문하셔서 나만의 컬러와 코드를 찾아보세요\n\n샤넬 컬러 철학을 보여주는\n색채로 가득 찬 특별한 공간에서\n샤넬 컬러와 코드를 다양하게 경험해보세요.\n\n샤넬의 컬러로 표현되는\n메이크업 터치업 서비스와 특별한 기프트도 놓치지 마세요.\n\n본팝업을 위해 특별 제작된 샤넬 코드 컬러 리미티드 에디션도 만나 보실 수 있습니다.\n\n지금 바로 예약하세요."
        }
        textstyle={"center"}
        width={"60%"}
        image={ss}
      />
      <Margin height="20" />
      {/* <Margin height="20" />
      <GetMaptext>팝업 요청 현황</GetMaptext>
      <Margin height="15" />

      <AnimatePresence>
        <RequestWrapper>
          <Kakaomap />
        </RequestWrapper>
        <Margin height="20" />
      </AnimatePresence>

      <Choose />
      <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <CustomTimeSlot
        label="시간 선택"
        selectedTime={selectedTimeSlot}
        onChange={handleTimeSlotChange}
      /> */}
      {/* <div>
        <button onClick={notify}>Get Toast</button>
        <Toaster position="bottom-center" />
      </div> */}

      <Period>
        <Typo
          weight="600"
          style={{ textDecoration: "underline", textUnderlineOffset: 5 }}
        >
          기간
        </Typo>
        <Typo>2023년 7월 5일(수) ~ 2023년 7월 30일(일)</Typo>
      </Period>
      <OperateTime>
        <Typo
          weight="600"
          style={{ textDecoration: "underline", textUnderlineOffset: 5 }}
        >
          운영 시간
        </Typo>
        <Typo>11:00 ~ 20:00</Typo>
      </OperateTime>
      <Space>
        <Typo
          weight="600"
          style={{ textDecoration: "underline", textUnderlineOffset: 5 }}
        >
          장소
        </Typo>
        <Typo>서울 성동구 아차산로9길 41 레이어 41</Typo>
      </Space>
      <Map>
        <Typo
          weight="600"
          style={{ textDecoration: "underline", textUnderlineOffset: 5 }}
        >
          지도 보기
        </Typo>
        <Kakaomap2 />
      </Map>

      <Margin height="30" />
      <PopupButton
        onClick={() => navigate(`/popupbooking/${brandId}/bookinglast`)}
      >
        <Typo size="1.1rem" weight="600" color="white">
          예약하기
        </Typo>
      </PopupButton>
      <Margin height="30" />
      <Footer />
      <Modal
        isOpen={requestbtnclikced && !isYes}
        onRequestClose={false}
        shouldCloseOnEsc={false}
        // shouldCloseOnOverlayClick={false}
        ariaHideApp={false}
        // closeTimeoutMS={1000}
        overlayElement={(props, overlayElement) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "tween" }}
            {...props}
          >
            {overlayElement}
          </motion.div>
        )}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.3)",
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
          content: {
            position: "fixed",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            margin: "auto auto",
            width: "325px",
            height: "200px",
            borderRadius: "20px",
          },
        }}
      >
        <RequestModal setIsYes={setIsYes} />
      </Modal>
      <Modal
        isOpen={isYes}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.3)",
            width: "100vw",
            height: "100vh",
          },
          content: {
            position: "fixed",
            left: 0,
            right: 0,
            top: 0,
            bottom: -40,
            backgroundColor: "transparent",
            border: "none",
            margin: "auto auto",
            width: "330px",
            height: "500px",
            borderRadius: "20px",
          },
        }}
      >
        <RequestComplete />
      </Modal>
      <Toaster position="top-center" />
    </Wrapper>
  );
};

export default BookingTwo;
