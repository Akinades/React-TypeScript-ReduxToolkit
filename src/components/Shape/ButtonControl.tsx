// import ตัวที่จำเป็น
import "./ButtonControl.css";
import { useState } from "react";
import { Row, Col, Button, Divider } from "antd";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import CarouselItem from "./CarouselItem";
import circleImage from "../../assets/circle.png";
import ellipseImage from "../../assets/Ellipse.png";
import parallelogramImage from "../../assets/parallelogram.png";
import rectangleImage from "../../assets/rectangle.png";
import squareImage from "../../assets/square.png";
import trapezoidImage from "../../assets/Trapezoid.png";
import { useTranslation } from "react-i18next";

const ButtonControl: React.FC = () => {
  const { t } = useTranslation();
  const iconStyle = { fontSize: 140, color: "gray", display: "inline-block" };

  const [reverse, setreverse] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [buttonsArray, setButtonsArray] = useState([
    circleImage,
    ellipseImage,
    parallelogramImage,
    rectangleImage,
    squareImage,
    trapezoidImage,
  ]);

  const handleLeftButtonClick = () => {
    setButtonsArray((prevButtons) => [...prevButtons.slice(1), prevButtons[0]]);
    setCurrentIndex(currentIndex === 1 ? 6 : currentIndex - 1);
  };

  const handleRightButtonClick = () => {
    setButtonsArray((prevButtons) => [
      prevButtons[prevButtons.length - 1],
      ...prevButtons.slice(0, prevButtons.length - 1),
    ]);
    setCurrentIndex(currentIndex === 6 ? 1 : currentIndex + 1);
  };

  const handleSwitchClick = () => {
    setreverse((pveValue) => !pveValue);
  };

  const handleRandomClick = () => {
    const shuffledArray = buttonsArray.slice(0).sort(() => Math.random() - 0.5);
    setButtonsArray(shuffledArray);
    setCurrentIndex(shuffledArray.indexOf(buttonsArray[0]) + 1);
  };
  console.log(buttonsArray);
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "0px" }}>
        <Row gutter={24} justify="center">
          {[
            { handleClick: handleLeftButtonClick, text: "Move shape" },
            { handleClick: handleSwitchClick, text: "Move position" },
            { handleClick: handleRightButtonClick, text: "Move shape" },
          ].map((item, index) => (
            <Col key={index} span={index === 1 ? 8 : 4}>
              <Button
                className="button !important"
                size="large"
                block
                onClick={item.handleClick}
              >
                {index === 1 ? (
                  <>
                    <CaretLeftOutlined
                      style={{
                        ...iconStyle,
                        transform: "rotate(90deg)",
                        marginRight: "100px",
                      }}
                    />
                    <CaretRightOutlined
                      style={{
                        ...iconStyle,
                        transform: "rotate(90deg)",
                      }}
                    />
                    <div>
                      <div className="text">{t(item.text)}</div>
                    </div>
                  </>
                ) : index === 0 ? (
                  <>
                    <CaretLeftOutlined style={iconStyle} />
                    <div>
                      <div className="text">{t(item.text)}</div>
                    </div>
                  </>
                ) : (
                  <>
                    <CaretRightOutlined style={iconStyle} />
                    <div>
                      <div className="text">{t(item.text)}</div>
                    </div>
                  </>
                )}
              </Button>
            </Col>
          ))}
        </Row>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ width: "70%" }}>
          <Divider />
        </div>
      </div>
      <CarouselItem
        buttonsArray={buttonsArray}
        currentIndex={currentIndex}
        setReverse={reverse}
        onButtonClick={handleRandomClick}
      />
    </>
  );
};

export default ButtonControl;
