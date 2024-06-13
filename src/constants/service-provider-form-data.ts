import { title } from "process";
import { categories } from "./category";

export const formdata: any = [
  {
    title: "Video Title",
    description: "Enter your video title",
    tag: "text",
    required: false,
    name: "title",
    type: "text",
    maxlength: 100,
  },
  {
    title: "Video Description",
    description: "Enter your video description",
    tag: "textarea",
    required: false,
    name: "description",
  },
  {
    title: "Thumbnail",
    description: "Upload your thumbnail",
    tag: "file",
    required: false,
    name: "thumbnail",
  },
  {
    title: "Preview Video",
    description: "Upload your preview video",
    tag: "file",
    required: false,
    name: "preview_video",
  },
  {
    title: "Original Video",
    description: "Upload your original video",
    tag: "file",
    required: false,
    name: "original_video",
  },
  {
    title: "category",
    description: "Enter your category",
    tag: "select-1",
    placeholder: "Select Category",
    required: false,
    name: "category",
    options: categories,
  },
  {
    title: "Language",
    description: "Enter your language",
    tag: "select",
    required: false,
    type: "select",
    name: "language",
    options: [
      { label: "English", value: "english" },
      { label: "Hindi", value: "hindi" },
      { label: "Tamil", value: "tamil" },
      { label: "Telugu", value: "telugu" },
      { label: "Malayalam", value: "malayalam" },
      { label: "Kannada", value: "kannada" },
      { label: "Bengali", value: "bengali" },
      { label: "Marathi", value: "marathi" },
      { label: "Gujarati", value: "gujarati" },
      { label: "Punjabi", value: "punjabi" },
      { label: "Odia", value: "odia" },
      { label: "Assamese", value: "assamese" },
      { label: "Urdu", value: "urdu" },
      { label: "Sanskrit", value: "sanskrit" },
      { label: "Konkani", value: "konkani" },
      { label: "Nepali", value: "nepali" },
      { label: "Sindhi", value: "sindhi" },
      { label: "Dogri", value: "dogri" },
      { label: "Manipuri", value: "manipuri" },
      { label: "Kashmiri", value: "kashmiri" },
      { label: "Maithili", value: "maithili" },
      { label: "Bodo", value: "bodo" },
      { label: "Santhali", value: "santhali" },
      { label: "Khasi", value: "khasi" },
      { label: "Garo", value: "garo" },
      { label: "Mizo", value: "mizo" },
      { label: "Tangkhul", value: "tangkhul" },
      { label: "Kokborok", value: "kokborok" },
      { label: "Naga", value: "naga" },
      { label: "Bhutia", value: "bhutia" },
    ],
  },
];
