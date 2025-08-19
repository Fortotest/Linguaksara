
export type StoryCategory = "Fiksi & Sastra" | "Sejarah & Biografi" | "Self-Improvement & Produktivitas" | "Filsafat & Politik";

export type WordDefinition = {
  word: string;
  definition: string;
};

type MultipleChoiceQuestion = {
  question: string;
  options: string[];
  answer: string;
};

type TrueFalseQuestion = {
  statement: string;
  answer: boolean;
};

type Activity = 
  | { type: 'multiple-choice', questions: MultipleChoiceQuestion[] }
  | { type: 'true-false', questions: TrueFalseQuestion[] }
  | { type: 'chronology', items: string[] } // items are in correct order
  | { type: 'match', pairs: { item: string, match: string }[] }
  | { type: 'guess-who', suspects: { name: string, image: string }[], culprit: string }
  | { type: 'draw-route' }
  | { type: 'plan-habit' }
  | { type: 'identify-distractions' }
  | { type: 'scenario-simulation' };


export interface Story {
  id: string;
  title: string;
  author: string;
  synopsis: string;
  level: 'Pemula' | 'Menengah' | 'Lanjutan';
  category: StoryCategory;
  image: string;
  dataAiHint: string;
  paragraphs: string[];
  keywords: WordDefinition[];
  activity: Activity;
}

export const readingData: Story[] = [
  // Fiksi & Sastra
  {
    id: "1",
    title: "A Journey to the Ancient City",
    author: "Alex Thompson",
    synopsis: "Ikuti tim penjelajah dalam perjalanan mendebarkan untuk menemukan kota kuno Eldoria yang telah lama hilang.",
    level: "Menengah",
    category: "Fiksi & Sastra",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "ancient city landscape",
    paragraphs: [
        "The sun cast long shadows as our team made the final ascent to the hidden city of Eldoria. For centuries, this place was considered a myth, a whisper among historians.",
        "The journey was arduous, testing our limits at every turn. We navigated through dense jungles where unseen creatures chirped, and crossed treacherous rivers with currents that threatened to pull us under.",
        "Yet, our team remained resilient, driven by the promise of discovery. As we finally passed through the moss-covered stone gates, a sense of awe washed over us.",
        "The air grew still and a serene silence replaced the cacophony of the jungle. The architecture was magnificent, unlike anything we had ever seen. Towers pierced the clouds, and bridges made of gleaming crystal spanned vast chasms.",
        "We felt a profound connection to the past, standing amidst the silent ruins. Our expedition's primary goal was to document these findings and preserve the incredible legacy of this place, ensuring that Eldoria would never be forgotten again."
    ],
    keywords: [
      { word: "ascent", definition: "Pendakian atau perjalanan naik ke puncak gunung atau bukit." },
      { word: "arduous", definition: "Membutuhkan usaha yang sangat berat; sulit dan melelahkan." },
      { word: "resilient", definition: "Mampu bertahan atau pulih dengan cepat dari kesulitan; tangguh." },
      { word: "awe", definition: "Perasaan takjub dan hormat yang bercampur dengan sedikit rasa takut atau heran." },
      { word: "serene", definition: "Tenang, damai, dan tidak terganggu." },
      { word: "profound", definition: "Sangat mendalam atau kuat; menunjukkan pengetahuan atau wawasan yang hebat." },
      { word: "legacy", definition: "Sesuatu yang ditinggalkan oleh seseorang atau dari masa lalu; warisan." },
    ],
    activity: {
      type: 'chronology',
      items: [
        "Menavigasi hutan lebat",
        "Menyeberangi sungai berbahaya",
        "Melewati gerbang batu yang tertutup lumut",
        "Melihat arsitektur yang megah",
        "Mendokumentasikan temuan untuk melestarikan warisan"
      ]
    }
  },
  {
    id: "2",
    title: "The Last Robot",
    author: "Jane C. Foster",
    synopsis: "Di dunia yang sunyi, robot terakhir yang tersisa menemukan tujuan baru setelah bertemu dengan seorang anak manusia.",
    level: "Pemula",
    category: "Fiksi & Sastra",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "lonely robot",
    paragraphs: [
      "Unit 734 was the last of its kind. All other robots had become obsolete, their circuits silenced by time. For years, Unit 734 wandered the quiet, empty cities, performing its programmed tasks for no one.",
      "A global shutdown had saved it from the fate of the others. While they slept, it worked, maintaining a world that had moved on. This solitude was its entire existence, a lonely vigil in a mechanical world.",
      "One day, a flicker of movement caught its optical sensors. A small human child, full of curiosity, was watching it from behind a rusted car. The child was not afraid, only intrigued.",
      "Slowly, a bond formed between them. The child taught Unit 734 about laughter and games, concepts not found in its programming. The robot, in turn, showed the child the hidden wonders of the city's machinery.",
      "In the end, Unit 734 learned that its purpose wasn't just about tasks. It was about connection, friendship, and a form of humanity it never knew it could possess. It was no longer just a machine, but a guardian."
    ],
    keywords: [
        { word: "obsolete", definition: "Tidak lagi diproduksi atau digunakan; ketinggalan zaman." },
        { word: "solitude", definition: "Keadaan menyendiri atau terasing; kesendirian." },
        { word: "curiosity", definition: "Keinginan yang kuat untuk mengetahui atau mempelajari sesuatu." },
        { word: "bond", definition: "Hubungan atau ikatan antara orang-orang atau kelompok." },
        { word: "humanity", definition: "Kualitas menjadi manusia, seperti kemampuan untuk mencintai dan berbelas kasih." }
    ],
    activity: {
      type: 'true-false',
      questions: [
        { statement: "Unit 734 was one of many robots still active.", answer: false },
        { statement: "The robot was initially scared of the human child.", answer: false },
        { statement: "The child taught the robot about friendship.", answer: true },
        { statement: "The robot's only purpose was to perform its programmed tasks.", answer: false },
        { statement: "Unit 734 felt lonely before meeting the child.", answer: true }
      ]
    }
  },
   {
    id: "3",
    title: "The Case of the Missing Diamond",
    author: "Arthur Doyle",
    synopsis: "Seorang detektif brilian harus memecahkan kasus hilangnya berlian berharga dengan mewawancarai tiga tersangka yang penuh rahasia.",
    level: "Menengah",
    category: "Fiksi & Sastra",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "detective mystery",
    paragraphs: [
        "The Blue Star Diamond, a gem of legendary size and value, had vanished. Detective Miles Corbin surveyed the room, the air thick with tension. The task was clear: find the diamond, and find the thief among the three people present.",
        "First was Lady Eleanor, the owner, who claimed she was in the garden. Then, Mr. Silas, the butler, who insisted he was polishing silver in the kitchen. Finally, Marco, the art dealer, who said he was admiring a painting in the hall. Each suspect had a seemingly perfect alibi.",
        "Corbin's sharp eyes scanned the room again. He noticed a tiny, muddy footprint near the empty display case—far too small for a man's shoe. He also saw a faint scratch on the floor, as if something heavy had been dragged. This was the first clue.",
        "He questioned Lady Eleanor about her gardening shoes. She nervously denied wearing them inside. At that moment, Corbin had a moment of revelation. The clues clicked together, painting a clear picture of the crime.",
        "Corbin revealed his findings. Lady Eleanor, burdened by debt, had staged the theft. The 'muddy footprint' was from her own shoe, and she had hidden the diamond inside a hollow book. The case of the missing diamond was closed."
    ],
    keywords: [
        { word: "detective", definition: "Seseorang, terutama anggota kepolisian, yang tugasnya menyelidiki dan memecahkan kejahatan." },
        { word: "suspect", definition: "Seseorang yang diduga melakukan kejahatan atau kesalahan." },
        { word: "alibi", definition: "Klaim atau bukti bahwa seseorang berada di tempat lain ketika suatu tindak kejahatan terjadi." },
        { word: "clue", definition: "Sebuah fakta atau benda yang memberikan petunjuk untuk memecahkan suatu masalah atau misteri." },
        { word: "reveal", definition: "Membuat sesuatu yang sebelumnya rahasia atau tidak diketahui menjadi diketahui." }
    ],
    activity: {
      type: 'guess-who',
      suspects: [
        { name: "Lady Eleanor", image: "https://placehold.co/100x100.png" },
        { name: "Mr. Silas", image: "https://placehold.co/100x100.png" },
        { name: "Marco", image: "https://placehold.co/100x100.png" }
      ],
      culprit: "Lady Eleanor"
    }
  },
  // Sejarah & Biografi
  {
    id: "4",
    title: "The Rise and Fall of the Roman Empire",
    author: "Edward Gibbon Jr.",
    synopsis: "Sebuah tinjauan singkat tentang bagaimana Kekaisaran Romawi tumbuh menjadi kekuatan dominan dan faktor-faktor yang menyebabkan keruntuhannya.",
    level: "Lanjutan",
    category: "Sejarah & Biografi",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "roman empire colosseum",
    paragraphs: [
        "The story of the Roman Empire begins not as an empire, but as a humble republic. Founded in 509 BCE, the Roman Republic was built on principles of law and elected representation. Through centuries of conflict and expansion, it grew from a small city-state into a vast power.",
        "The golden age, or Pax Romana, was a period of unprecedented peace and prosperity. The empire made incredible achievements in engineering, architecture, law, and governance. Roads, aqueducts, and magnificent cities like Rome itself stood as testaments to its power.",
        "However, by the 3rd century CE, the empire began to face serious challenges. Factors contributing to its decline included political instability, economic troubles, over-expansion, and constant pressure from barbarian tribes along its borders.",
        "The official fall of the Western Roman Empire is often dated to 476 CE, when the last Roman emperor was deposed. The empire had become too large to govern effectively, and its internal divisions weakened it fatally.",
        "Despite its collapse, the legacy of the Roman Empire endured. Its language, laws, and architectural principles would heavily influence the development of Western civilization for millennia to come, leaving an indelible mark on the world."
    ],
    keywords: [
      { word: "republic", definition: "Sebuah negara di mana kekuasaan dipegang oleh rakyat dan perwakilan yang mereka pilih." },
      { word: "empire", definition: "Sebuah kelompok negara atau wilayah yang luas yang dikuasai oleh satu penguasa atau pemerintahan." },
      { word: "achievements", definition: "Sesuatu yang besar yang berhasil dilakukan, biasanya melalui usaha atau keterampilan." },
      { word: "decline", definition: "Penurunan secara bertahap dalam kekuatan, kemakmuran, atau kualitas." },
      { word: "legacy", definition: "Sesuatu yang ditinggalkan oleh seseorang atau dari masa lalu; warisan." }
    ],
    activity: {
      type: 'multiple-choice',
      questions: [
          { question: "What was the initial form of Roman government?", options: ["Monarchy", "Republic", "Empire", "Democracy"], answer: "Republic" },
          { question: "What does 'Pax Romana' refer to?", options: ["A great war", "A period of peace and prosperity", "The fall of Rome", "A Roman law"], answer: "A period of peace and prosperity" },
          { question: "Which of these was NOT a factor in the decline of the Roman Empire?", options: ["Political instability", "Economic troubles", "Lack of military", "Over-expansion"], answer: "Lack of military" }
      ]
    }
  },
  {
    id: "5",
    title: "Leonardo da Vinci: The Renaissance Man",
    author: "Walter Isaacson",
    synopsis: "Jelajahi kejeniusan Leonardo da Vinci, seorang seniman, ilmuwan, dan penemu yang melambangkan semangat Renaisans.",
    level: "Menengah",
    category: "Sejarah & Biografi",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "da vinci mona lisa",
    paragraphs: [
      "Leonardo da Vinci is the ultimate symbol of the Renaissance, a period of great cultural change and artistic innovation in Europe. Born in 1452 in Italy, his curiosity and desire for knowledge seemed to have no limits.",
      "As an artist, he created masterpieces that are still admired today, such as the 'Mona Lisa' and 'The Last Supper'. His use of perspective and light created a new sense of realism that influenced generations of artists.",
      "But Leonardo was not just an artist. As a scientist, he studied anatomy in great detail, dissecting human bodies to understand how they worked. His notebooks are filled with detailed drawings of muscles, bones, and organs.",
      "He was also an inventor, designing concepts for machines that were centuries ahead of their time, including a flying machine, an armored car, and a diving suit. His visionary ideas show the incredible breadth of his genius.",
      "Leonardo's legacy is not just in his art or his inventions, but in his approach to life. He showed the world the power of combining art and science, and the importance of being endlessly curious about the world around us."
    ],
    keywords: [
      { word: "Renaissance", definition: "Periode kebangkitan seni dan sastra di bawah pengaruh model klasik di Eropa dari abad ke-14 hingga ke-16." },
      { word: "masterpiece", definition: "Sebuah karya dengan keterampilan luar biasa; karya terbaik dari seorang seniman." },
      { word: "invention", definition: "Sesuatu, biasanya proses atau perangkat, yang telah dibuat untuk pertama kalinya." },
      { word: "anatomy", definition: "Cabang ilmu yang berkaitan dengan struktur tubuh makhluk hidup." },
      { word: "genius", definition: "Kecerdasan, kreativitas, atau kemampuan alami asli yang luar biasa." }
    ],
    activity: {
      type: 'match',
      pairs: [
        { item: "Mona Lisa", match: "Karya seni lukisan terkenal" },
        { item: "Flying Machine", match: "Konsep penemuan untuk penerbangan" },
        { item: "Anatomy Studies", match: "Studi ilmiah tentang tubuh manusia" },
        { item: "The Last Supper", match: "Lukisan dinding ikonik" }
      ]
    }
  },
  {
    id: "6",
    title: "The Silk Road: Connecting Worlds",
    author: "Peter Frankopan",
    synopsis: "Temukan bagaimana Jalan Sutra kuno tidak hanya memperdagangkan barang, tetapi juga menghubungkan peradaban dan budaya.",
    level: "Lanjutan",
    category: "Sejarah & Biografi",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "silk road desert caravan",
    paragraphs: [
      "The Silk Road was not a single road, but a vast network of trade routes connecting the East and West for over 1,500 years. It was the main artery for commerce and cultural exchange between civilizations like China, India, Persia, and the Roman Empire.",
      "While silk was the most famous commodity traveling west from China, many other goods were traded. Spices, porcelain, and tea flowed westward, while wool, gold, and silver traveled east. This exchange of goods created immense wealth for the cities along the route.",
      "The journey was perilous. Merchants faced harsh deserts, towering mountains, and the threat of bandits. Caravans of camels were essential for traversing these difficult landscapes, carrying goods and people across thousands of miles.",
      "More important than the goods was the exchange of ideas. Religions like Buddhism spread from India to China. Scientific knowledge, artistic styles, and even diseases were transmitted along this ancient superhighway of culture.",
      "The impact of the Silk Road on world history is profound. It broke down geographical barriers, fostering a level of global interaction that was unprecedented for its time and laying the groundwork for the modern interconnected world."
    ],
    keywords: [
      { word: "trade route", definition: "Rute yang digunakan oleh para pedagang untuk mengangkut barang." },
      { word: "civilization", definition: "Masyarakat, budaya, dan cara hidup suatu daerah tertentu." },
      { word: "goods", definition: "Barang dagangan atau kepemilikan." },
      { word: "culture", definition: "Gagasan, adat istiadat, dan perilaku sosial dari masyarakat tertentu." },
      { word: "impact", definition: "Efek atau pengaruh yang kuat." }
    ],
    activity: {
      type: 'multiple-choice',
      questions: [
        { question: "What was the most famous product from China on the Silk Road?", options: ["Spices", "Gold", "Silk", "Wool"], answer: "Silk" },
        { question: "Besides goods, what else was exchanged on the Silk Road?", options: ["Only money", "Ideas and culture", "Only animals", "Passwords"], answer: "Ideas and culture" }
      ]
    }
  },
  // Self-Improvement & Produktivitas
  {
    id: "7",
    title: "The Power of Habit",
    author: "Charles Duhigg",
    synopsis: "Pahami sains di balik kebiasaan dan pelajari cara membangun kebiasaan baik dan menghilangkan yang buruk.",
    level: "Menengah",
    category: "Self-Improvement & Produktivitas",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "domino effect chain reaction",
    paragraphs: [
      "Habits are the invisible architecture of our daily life. They are actions we perform automatically, without much thought. Understanding how they work is the first step to making meaningful changes and improving our lives.",
      "Scientists have discovered a simple neurological loop at the core of every habit: the 'Habit Loop'. It consists of three parts: a cue, a routine, and a reward. The cue is a trigger that tells your brain to go into automatic mode and which habit to use.",
      "The routine is the physical, mental, or emotional action you take. It's what we typically think of as the habit itself. For example, the routine might be checking your phone or eating a cookie.",
      "Finally, there's the reward, which helps your brain figure out if this particular loop is worth remembering for the future. The reward provides positive reinforcement, making you more likely to repeat the routine the next time the cue appears.",
      "To change a habit, you must keep the old cue and deliver the old reward, but insert a new routine. This is the golden rule of habit change. By understanding this framework, you can take control of your habits and reshape your life."
    ],
    keywords: [
      { word: "habit", definition: "Kecenderungan atau praktik yang mapan, terutama yang sulit untuk ditinggalkan." },
      { word: "cue", definition: "Sinyal atau pemicu untuk suatu tindakan." },
      { word: "routine", definition: "Urutan tindakan yang diikuti secara teratur." },
      { word: "reward", definition: "Sesuatu yang diberikan sebagai pengakuan atas layanan, usaha, atau pencapaian." },
      { word: "strategy", definition: "Rencana tindakan atau kebijakan yang dirancang untuk mencapai tujuan utama." }
    ],
    activity: {
      type: 'plan-habit',
      items: ["Pemicu (Cue)", "Rutinitas Baru (New Routine)", "Hadiah (Reward)"]
    }
  },
  {
    id: "8",
    title: "Finding Focus in a Distracted World",
    author: "Cal Newport",
    synopsis: "Pelajari cara kerja 'Deep Work' dan temukan strategi praktis untuk meningkatkan konsentrasi di era digital.",
    level: "Lanjutan",
    category: "Self-Improvement & Produktivitas",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "person focused deep work",
    paragraphs: [
      "In our modern world, the ability to focus without distraction is becoming increasingly rare. We are constantly bombarded by notifications, emails, and social media updates. This constant distraction is a significant barrier to achieving our most important goals.",
      "The concept of 'Deep Work' describes professional activities performed in a state of distraction-free concentration that push your cognitive capabilities to their limit. These efforts create new value, improve your skill, and are hard to replicate.",
      "One practical technique to achieve deep work is the Pomodoro Technique. You work on a task for a focused 25-minute interval, then take a short 5-minute break. This method helps maintain high levels of concentration while preventing burnout.",
      "Your environment is also crucial. Create a dedicated workspace that is free from interruptions. Signal to others that you are in a deep work session and should not be disturbed. Turning off your phone or disconnecting from the internet can be powerful strategies.",
      "Mastering the skill of deep work is not easy, but it is one of the most valuable skills in the 21st century. By intentionally scheduling and protecting your time for deep focus, you can produce better work and find more fulfillment in your professional life."
    ],
    keywords: [
      { word: "distraction", definition: "Sesuatu yang mencegah seseorang memberikan perhatian penuh pada sesuatu yang lain." },
      { word: "focus", definition: "Pusat minat atau aktivitas." },
      { word: "deep work", definition: "Aktivitas profesional yang dilakukan dalam keadaan konsentrasi bebas gangguan." },
      { word: "technique", definition: "Cara melakukan tugas tertentu, terutama yang melibatkan keterampilan praktis." },
      { word: "environment", definition: "Lingkungan atau kondisi di mana seseorang, hewan, atau tumbuhan hidup atau beroperasi." }
    ],
    activity: {
      type: 'identify-distractions',
      items: []
    }
  },
  {
    id: "9",
    title: "The Art of Saying No",
    author: "Damon Zahariades",
    synopsis: "Belajar untuk menetapkan batasan dan menolak dengan sopan adalah kunci untuk melindungi waktu dan energi Anda.",
    level: "Menengah",
    category: "Self-Improvement & Produktivitas",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "person setting boundaries",
    paragraphs: [
      "Learning to say 'no' is one of the most important skills for personal and professional well-being. It is not about being selfish or unkind; it's about respecting your own time and priorities. Every time you say 'yes' to something, you are saying 'no' to something else.",
      "The consequence of always saying 'yes' is often burnout, stress, and resentment. You end up over-committed to tasks that are not important to you, leaving no time or energy for your own goals and passions.",
      "You can decline politely without damaging relationships. A simple phrase like, 'Thank you for thinking of me, but I can't commit to that right now,' is often enough. You don't always need to provide a long explanation.",
      "Remember that a 'no' is about the request, not the person. When you value your time, others will learn to value it too. Setting boundaries is a sign of self-respect, and it teaches others how to treat you.",
      "Ultimately, the art of saying 'no' is about creating space in your life for the things that truly matter. It empowers you to focus on your highest priorities and live a more intentional and fulfilling life."
    ],
    keywords: [
      { word: "priority", definition: "Sesuatu yang dianggap lebih penting daripada yang lain." },
      { word: "boundaries", definition: "Batas atau batasan yang menunjukkan di mana sesuatu berakhir dan yang lain dimulai." },
      { word: "decline politely", definition: "Menolak dengan sopan atau ramah." },
      { word: "commitment", definition: "Keadaan atau kualitas menjadi berdedikasi pada suatu tujuan atau aktivitas." },
      { word: "well-being", definition: "Keadaan nyaman, sehat, atau bahagia." }
    ],
    activity: {
      type: 'scenario-simulation',
      items: []
    }
  },
  // Filsafat & Politik
  {
    id: "10",
    title: "Stoicism: A Guide to a Calm Life",
    author: "Ryan Holiday",
    synopsis: "Jelajahi filsafat kuno Stoicism dan pelajari cara menemukan ketenangan dan ketangguhan dalam menghadapi kesulitan hidup.",
    level: "Lanjutan",
    category: "Filsafat & Politik",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "stoic philosopher statue",
    paragraphs: [
        "Stoicism is an ancient Greek and Roman philosophy that teaches the development of self-control and fortitude as a means of overcoming destructive emotions. It doesn't seek to eliminate emotions, but rather to transform them by a resolute practice of logic and reason.",
        "A core principle of Stoicism is the 'dichotomy of control'. This is the idea that some things are within our control, and some are not. The Stoics argue that we should focus our energy only on what we can control—our own thoughts, judgments, and actions.",
        "Events in the outside world, like what other people say or the weather, are beyond our control. Worrying about them is not only useless but also harmful to our tranquility. By accepting this, we can achieve a state of inner peace, or 'apatheia'.",
        "Stoicism also emphasizes the importance of virtue as the only true good. Virtues like wisdom, justice, courage, and moderation are what we should strive for. External things like wealth or health are considered indifferent—they are nice to have, but not essential for a good life.",
        "In essence, Stoicism provides a practical framework for navigating the challenges of life with resilience and calm. It is a philosophy for action, not just for debate, empowering individuals to live a more virtuous and fulfilling life regardless of their external circumstances."
    ],
    keywords: [
        { word: "philosophy", definition: "Studi tentang sifat dasar pengetahuan, realitas, dan eksistensi." },
        { word: "fortitude", definition: "Keberanian dalam menghadapi rasa sakit atau kesulitan." },
        { word: "dichotomy", definition: "Pembagian atau kontras antara dua hal yang berlawanan atau sangat berbeda." },
        { word: "tranquility", definition: "Kualitas atau keadaan tenang dan damai." },
        { word: "virtue", definition: "Perilaku yang menunjukkan standar moral yang tinggi." }
    ],
    activity: {
        type: 'multiple-choice',
        questions: [
            { question: "What is the core principle of Stoicism mentioned in the text?", options: ["The pursuit of wealth", "The dichotomy of control", "Eliminating all emotions", "Seeking pleasure"], answer: "The dichotomy of control" },
            { question: "According to Stoics, what is the only true good?", options: ["Health", "Fame", "Virtue", "Power"], answer: "Virtue" },
            { question: "What should we focus our energy on, according to Stoicism?", options: ["What other people think", "Things within our control", "The weather", "Past events"], answer: "Things within our control" }
        ]
    }
  },
  {
    id: "11",
    title: "What is Democracy?",
    author: "Aristotle",
    synopsis: "Pahami konsep dasar demokrasi, bentuk pemerintahan di mana rakyat memegang kekuasaan tertinggi.",
    level: "Pemula",
    category: "Filsafat & Politik",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "voting ballot box",
    paragraphs: [
      "Democracy is a system of government where the supreme power is vested in the people. The word 'democracy' comes from two Greek words: 'demos' meaning 'people', and 'kratos' meaning 'rule'. So, democracy literally means 'rule by the people'.",
      "In a democracy, citizens exercise their power either directly or through elected representatives. In a direct democracy, all citizens meet to decide on policies. This is rare today. Most modern democracies are representative democracies.",
      "In a representative democracy, citizens elect officials to make political decisions, formulate laws, and run programs on their behalf. Free and fair elections are a cornerstone of this system, allowing people to choose their leaders and hold them accountable.",
      "Besides elections, key features of a democracy include protecting basic human rights, such as freedom of speech and religion. It also requires the rule of law, meaning that everyone, including the government, is subject to the law.",
      "While no system is perfect, democracy is designed to prevent the abuse of power and to ensure that the government serves the interests of the people. It is a system built on the principles of equality, freedom, and representation."
    ],
    keywords: [
      { word: "democracy", definition: "Sistem pemerintahan di mana kekuasaan tertinggi dipegang oleh rakyat." },
      { word: "vested", definition: "Diberikan atau dianugerahkan sebagai hak atau kekuasaan." },
      { word: "representative", definition: "Seseorang yang dipilih untuk bertindak atau berbicara atas nama orang lain." },
      { word: "cornerstone", definition: "Fitur penting yang menjadi dasar atau fondasi sesuatu." },
      { word: "accountable", definition: "Diharuskan atau diharapkan untuk membenarkan tindakan atau keputusan; bertanggung jawab." }
    ],
    activity: {
      type: 'true-false',
      questions: [
        { statement: "In a democracy, a single ruler holds all the power.", answer: false },
        { statement: "The word 'democracy' means 'rule by the elite'.", answer: false },
        { statement: "Free and fair elections are essential for a representative democracy.", answer: true }
      ]
    }
  },
  {
    id: "12",
    title: "Socrates: The Man Who Asked Why",
    author: "Plato",
    synopsis: "Kenali Socrates, salah satu pendiri filsafat Barat, yang metodenya dalam bertanya mengubah cara kita berpikir selamanya.",
    level: "Menengah",
    category: "Filsafat & Politik",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "socrates statue philosopher",
    paragraphs: [
      "Socrates is one of the most famous figures in history, but he left no writings of his own. What we know of him comes primarily from the works of his student, Plato. Socrates was a classical Greek philosopher credited as one of the founders of Western philosophy.",
      "He is best known for the 'Socratic method'. This is a form of cooperative argumentative dialogue between individuals, based on asking and answering questions to stimulate critical thinking and to draw out ideas and underlying presumptions.",
      "Socrates believed that the unexamined life is not worth living. He would often wander the streets of Athens, engaging citizens in conversations about concepts like justice, virtue, and knowledge. He claimed that his wisdom was in knowing that he knew nothing.",
      "This constant questioning, however, made powerful people in Athens uncomfortable. They accused him of corrupting the youth and not believing in the city's gods. He was put on trial, found guilty, and sentenced to death.",
      "Despite his tragic end, Socrates's influence is immeasurable. His emphasis on reason, self-examination, and the relentless pursuit of truth has shaped the course of Western thought for over two millennia. He taught us not what to think, but how to think."
    ],
s_keywords: [
      { word: "philosopher", definition: "Seseorang yang mempelajari filsafat, yang merupakan studi tentang sifat dasar pengetahuan, realitas, dan eksistensi." },
      { word: "Socratic method", definition: "Metode bertanya untuk merangsang pemikiran kritis." },
      { word: "stimulate", definition: "Meningkatkan tingkat aktivitas fisiologis atau saraf dalam tubuh atau bagian tubuh." },
      { word: "presumptions", definition: "Gagasan yang dianggap benar atau pasti akan terjadi, meskipun tidak ada bukti." },
      { word: "immeasurable", definition: "Terlalu besar, luas, atau ekstrem untuk diukur." }
    ],
    activity: {
      type: 'multiple-choice',
      questions: [
        { question: "What is the 'Socratic method' primarily based on?", options: ["Writing books", "Giving lectures", "Asking and answering questions", "Silent meditation"], answer: "Asking and answering questions" },
        { question: "Why was Socrates sentenced to death?", options: ["For being poor", "For leaving Athens", "For corrupting the youth", "For writing plays"], answer: "For corrupting the youth" }
      ]
    }
  }
];

    