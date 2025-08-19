
import { BookOpen, PencilRuler } from "lucide-react";

export type LessonType = "Lesson" | "Quiz" | "Practice";

export const unitsData = {
  "1": { 
    title: "Unit 1: The Basics", 
    lessons: [
      { id: "1", title: "Greetings and Introductions", description: "Pelajari cara menyapa dan memperkenalkan diri Anda.", type: "Lesson", completed: false },
      { id: "2", title: "Basic Phrases", description: "Kuasai frasa penting untuk komunikasi sehari-hari.", type: "Lesson", completed: false },
      { id: "3", title: "Alphabet and Numbers", description: "Kenali alfabet dan angka dalam bahasa Inggris.", type: "Lesson", completed: false },
      { id: "4", title: "Quiz: The Basics", description: "Uji pemahaman Anda tentang dasar-dasar.", type: "Quiz", completed: false },
    ] 
  },
  "2": { 
    title: "Unit 2: Traveling",
    lessons: [
      { id: "1", title: "At the Airport", description: "Pelajari kosakata yang berguna di bandara.", type: "Lesson", completed: false },
      { id: "2", title: "Booking a Hotel", description: "Simulasikan cara memesan kamar hotel.", type: "Lesson", completed: false },
      { id: "3", title: "Asking for Directions", description: "Jangan tersesat! Pelajari cara menanyakan arah.", type: "Practice", completed: false },
      { id: "4", title: "Quiz: Traveling", description: "Uji pengetahuan Anda seputar bepergian.", type: "Quiz", completed: false },
    ]
  },
  "3": { 
    title: "Unit 3: At the Workplace",
    lessons: [
      { id: "1", title: "Writing a Professional Email", description: "Pelajari cara menyusun email yang profesional.", type: "Lesson", completed: false },
      { id: "2", title: "Common Business Idioms", description: "Kuasai idiom yang sering digunakan di dunia kerja.", type: "Lesson", completed: false },
      { id: "3", title: "Phone Call Simulation", description: "Latih kemampuan menelepon dalam bahasa Inggris.", type: "Practice", completed: false },
      { id: "4", title: "Quiz: Workplace English", description: "Uji kemampuan bahasa Inggris bisnis Anda.", type: "Quiz", completed: false },
    ]
  },
  "4": { 
    title: "Unit 4: Hobbies & Media",
    lessons: [
      { id: "1", title: "Talking About Movies", description: "Diskusikan film favorit Anda seperti seorang kritikus.", type: "Lesson", completed: false },
      { id: "2", title: "Discussing Music Genres", description: "Pelajari cara membicarakan selera musik Anda.", type: "Lesson", completed: false },
      { id: "3", title: "Reading a News Article", description: "Latih pemahaman membaca dengan artikel berita.", type: "Practice", completed: false },
      { id: "4", title: "Quiz: Hobbies & Media", description: "Uji wawasan Anda tentang hobi dan media.", type: "Quiz", completed: false },
    ]
  },
};
