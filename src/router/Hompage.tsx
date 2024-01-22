import { Button, Typography } from "antd";
import "./Homepage.css";
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const { Text } = Typography;
interface ContentProps {
  title: string;
  descriptions: string;
}
const Content: React.FC<ContentProps> = ({ title, descriptions }) => (
  <div className="content-container">
    <Text className="title" strong>
      {title}
    </Text>
    <Text className="descriptions">{descriptions}</Text>
  </div>
);

const Homepage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const details = [
    { title: "Test 1", description: "Layout & Style" },
    { title: "Test 2", description: "Form & Table" },
  ];

  const handleButtonClick = (index: number) => {
    if (index === 0) {
      navigate("/layout");
    } else {
      navigate("/form");
    }
  };
  return (
    <>
      <div className="button-container">
        <div className="button-wrapper">
          {details.map((detail, index) => (
            <Button
              key={index}
              className="custom-button"
              onClick={() => handleButtonClick(index)}
            >
              <Content
                title={t(detail.title)}
                descriptions={t(detail.description)}
              />
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Homepage;
