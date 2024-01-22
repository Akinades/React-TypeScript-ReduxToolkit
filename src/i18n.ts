// i18n.js or i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: {
          "Layout & Style": "Layout & Style",
          "Move shape": "Move shape",
          "Move position": "Move position",
          "Test 1": "Test 1",
          "Test 2": "Test 2",
          "Form & Table": "Form & Table",
          "Main page": "Main page",
          EN: "EN",
          TH: "TH",
          Birthday: "Birthday",
          "MM/DD/YYYY": "MM/DD/YYYY",
          Nationality: "Nationality",
          "--Select--": "--Select--",
          "ID card number": "ID card number",
          Gender: "Gender",
          Thai: "Thai",
          Lao: "Lao",
          China: "China",
          Male: "Male",
          Female: "Female",
          Undefined: "Undefined",
          "Mr.": "Mr.",
          "Ms.": "Ms.",
          "Mrs.": "Mrs.",
          "Name Title": "Name Title",
          Firstname: "Firstname",
          Sirname: "Sirname",
          "Phone Number": "Phone Number",
          "+1 (USA)": "+1 (USA)",
          "+44 (UK)": "+44 (UK)",
          "+81 (JP)": "+81 (JP)",
          "+66 (TH)": "+66 (TH)",
          Passport: "Passport",
          "Expected salary": "Expected salary",
          Clear: "Clear",
          Submit: "Submit",
          "Get All": "Get All",
          Delete: "Delete",
          Edit: "Edit",
          Name: "Name",
          Manage: "Manage",
          Code: "Code",
        },
      },
      th: {
        translation: {
          "Layout & Style": "การจัดการหน้าเว็บ",
          "Move shape": "เลื่อนรูปแบบ",
          "Move position": "เปลี่ยนตำแหน่ง",
          "Test 1": "แบบทดสอบที่ 1 ",
          "Test 2": "แบบทดสอบที่ 2 ",
          "Form & Table": "การจัดการหน้าฟอร์ม",
          "Main page": "หน้าหหลัก",
          EN: "ภาษาอักฤษ",
          TH: "ภาษาไทย",
          Birthday: "วันเกิด",
          "MM/DD/YYYY": "เดือน/วัน/ปี",
          Nationality: "สัญชาติ",
          "--Select--": "--กรุณาเลือก--",
          "ID card number": "เลขบัตรประชาชน",
          Gender: "เพศ",
          Thai: "ไทย",
          England: "อังกฤษ",
          Lao: "ลาว",
          China: "จีน",
          Male: "ชาย",
          Female: "หญิง",
          Undefined: "ไม่ระบุ",
          "Mr.": "นาย",
          "Ms.": "นาง.",
          "Mrs.": "นางสาว.",
          "Name Title": "คำนำหน้า",
          Firstname: "ชื่อจริง",
          Sirname: "นามสกุล",
          "Phone Number": "หมายเลขโทรศัพท์มือถือ",
          "+1 (USA)": "+1 (สหรัฐฯ)",
          "+44 (UK)": "+44 (อังกฤษ)",
          "+81 (JP)": "+81 (ญี่ปุ่น)",
          "+66 (TH)": "+66 (ไทย)",
          Passport: "หนังสือเดินทาง",
          "Expected salary": "เงินเดือนคาดหวัง",
          Clear: "ล้างข้อมูล",
          Submit: "ส่งข้อมูล",
          "Get All": "เลือกทั้งหมด",
          Delete: "ลบ",
          Edit: "แก้ไข",
          Name: "ชื่อ",
          Manage: "จัดการ",
          Code: "รหัส",
        },
      },
    },
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;