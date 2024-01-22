import React from "react";
import { Row, Col, Button } from "antd";

interface CarouselItemProps {
  buttonsArray: string[];
  currentIndex: number;
  setReverse: boolean;
  onButtonClick: () => void;
}

const CarouselItem: React.FC<CarouselItemProps> = ({
  buttonsArray,
  currentIndex,
  onButtonClick,
  setReverse,
}) => {
  const buttonStyle = {
    backgroundColor: "white",
    height: "200px",
    width: "100%",
  };

  const groupedButtons = Array.from(
    { length: Math.ceil(buttonsArray.length / 3) },
    (_, rowIndex) => buttonsArray.slice(rowIndex * 3, rowIndex * 3 + 3)
  );

  return (
    <div style={{ width: "75%", margin: "0 auto" }}>
      {groupedButtons.map((row, rowIndex) => (
        <Row
          key={rowIndex}
          gutter={24}
          justify={
            setReverse
              ? rowIndex % 2 === 0
                ? "center"
                : "end"
              : rowIndex % 2 === 0
              ? "end"
              : "center"
          }
          align="middle"
          style={{
            marginBottom: rowIndex === groupedButtons.length - 1 ? "10px" : 10,
          }}
        >
          {row.map((button, colIndex) => (
            <Col key={colIndex} span={6}>
              <Button
                type={
                  currentIndex === rowIndex * 3 + colIndex + 1
                    ? "default"
                    : "default"
                }
                style={buttonStyle}
                size="large"
                onClick={() => onButtonClick()}
              >
                <img
                  src={button}
                  alt={`Image ${rowIndex * 3 + colIndex + 1}`}
                />
              </Button>
            </Col>
          ))}
        </Row>
      ))}
    </div>
  );
};

export default CarouselItem;
