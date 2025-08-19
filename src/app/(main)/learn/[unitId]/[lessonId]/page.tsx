import {Button} from '@/components/ui/button';
import {unitsData} from '@/lib/learn-data';
import {
  ArrowLeft,
  Check,
  Lightbulb,
  Pencil,
  MessageSquareQuote,
  HelpCircle,
  BookCopy,
  Utensils,
  Clock,
  Home,
  Users,
  Flame,
  Star,
} from 'lucide-react';
import Link from 'next/link';
import {Card, CardContent} from '@/components/ui/card';
import {PronunciationCoach} from '@/components/pronunciation-coach';

export default async function LessonPage({
  params,
}: {
  params: {unitId: string; lessonId: string};
}) {
  const {unitId, lessonId} = await params;
  const unit = unitsData[unitId as keyof typeof unitsData];
  const lesson = unit?.lessons.find(l => l.id === lessonId);

  if (!unit || !lesson) {
    return (
      <div className="text-center p-4">
        <h1 className="text-2xl font-bold">Pelajaran tidak ditemukan</h1>
        <p className="text-muted-foreground">
          Pelajaran yang Anda cari tidak ada.
        </p>
        <Button asChild className="mt-4">
          <Link href={`/learn/${unitId}`}>Kembali ke Unit</Link>
        </Button>
      </div>
    );
  }

  const Tip = ({children}: {children: React.ReactNode}) => (
    <div className="my-6 flex items-start gap-4 rounded-lg border border-primary/20 bg-primary/5 p-4">
      <Lightbulb className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
      <div>
        <h4 className="font-bold text-primary mb-1">Pro Tip</h4>
        <div className="text-sm text-primary/90 prose prose-sm max-w-none">
          {children}
        </div>
      </div>
    </div>
  );

  const Practice = ({children}: {children: React.ReactNode}) => (
    <div className="my-6 flex items-start gap-4 rounded-lg border border-accent-foreground/20 bg-accent p-4">
      <Pencil className="h-6 w-6 text-accent-foreground mt-1 flex-shrink-0" />
      <div>
        <h4 className="font-bold text-accent-foreground mb-1">Latihan</h4>
        <div className="text-sm text-muted-foreground prose prose-sm max-w-none">
          {children}
        </div>
      </div>
    </div>
  );

  const Dialogue = ({
    character,
    text,
  }: {
    character: string;
    text: string;
  }) => (
    <div className="flex items-start gap-3 my-2">
      <div className="font-bold text-right text-muted-foreground text-sm w-16 flex-shrink-0">
        {character}:
      </div>
      <div className="flex-1 bg-muted rounded-md p-3 text-sm">{text}</div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Link
          href={`/learn/${unitId}`}
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Kembali ke {unit.title}
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold font-headline">
          {lesson.title}
        </h1>
        <p className="text-lg text-muted-foreground mt-1">
          {lesson.description}
        </p>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        {lesson.type === 'Lesson' && (
          <>
            {/* Unit 1 Content */}
            {unitId === '1' && lessonId === '1' && (
              <>
                <p>Selamat datang di pelajaran pertama Anda! Di sini, kita akan membangun fondasi terpenting dalam berkomunikasi: cara menyapa dan memperkenalkan diri. Menguasai ini akan memberi Anda kepercayaan diri untuk memulai percakapan apa pun dalam bahasa Inggris, baik dalam situasi formal maupun santai.</p>
                <p>Sapaan (greetings) adalah cara kita memulai interaksi. Pilihan sapaan sering kali bergantung pada waktu. Setelah menyapa, langkah selanjutnya adalah memperkenalkan diri. Berikut adalah beberapa frasa kunci yang akan kita pelajari:</p>
                <ul>
                  <li><strong>Hello / Hi:</strong> Sapaan paling umum. 'Hello' sedikit lebih formal daripada 'Hi'.</li>
                  <li><strong>Good morning / afternoon / evening:</strong> Sapaan yang digunakan berdasarkan waktu.</li>
                  <li><strong>My name is [Nama Anda]:</strong> Cara standar untuk memperkenalkan diri.</li>
                  <li><strong>Nice to meet you:</strong> Frasa sopan untuk diucapkan setelah seseorang memperkenalkan diri.</li>
                </ul>
                <p>Mari kita lihat bagaimana frasa-frasa ini digunakan dalam percakapan nyata. Perhatikan alur alami dari sapaan hingga perkenalan diri. Ini adalah pola yang akan sering Anda temui.</p>
                 <div className="not-prose">
                  <Dialogue character="Anna" text="Hello!" />
                  <Dialogue character="Budi" text="Hi! My name is Budi. What's your name?"/>
                  <Dialogue character="Anna" text="I'm Anna. Nice to meet you, Budi."/>
                  <Dialogue character="Budi" text="Nice to meet you too, Anna."/>
                </div>
                <Tip>
                  <p>Untuk terdengar lebih natural, Anda bisa menyingkat <strong>"My name is"</strong> menjadi <strong>"I'm"</strong>. Contoh: "I'm Budi" lebih umum digunakan dalam percakapan sehari-hari daripada "My name is Budi".</p>
                </Tip>
              </>
            )}
            {unitId === '1' && lessonId === '2' && (
              <>
                <p>Mengenal alfabet dan angka adalah pilar fundamental dalam belajar bahasa apa pun. Pelajaran ini akan membekali Anda dengan kemampuan untuk mengeja nama, menyebutkan nomor telepon, dan memahami informasi dasar lainnya yang menggunakan huruf dan angka, yang sangat penting dalam kehidupan sehari-hari.</p>
                <p>Alfabet bahasa Inggris terdiri dari 26 huruf. Meskipun beberapa huruf terlihat sama, pengucapannya bisa sangat berbeda dari bahasa Indonesia. Demikian pula, angka adalah dasar untuk membicarakan harga, waktu, dan jumlah. Mari kita fokus pada pengucapan yang benar untuk keduanya.</p>
                <ul>
                  <li><strong>Alfabet:</strong> A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z.</li>
                  <li><strong>Angka (1-10):</strong> One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten.</li>
                </ul>
                <p>Mengeja nama adalah salah satu penggunaan praktis pertama dari alfabet. Misalnya, jika seseorang bertanya, "How do you spell your name?" Anda akan menjawab dengan menyebutkan huruf-hurufnya satu per satu. Demikian pula, memahami angka penting saat berbelanja atau membuat janji.</p>
                <Tip>
                  <p>Banyak penutur asli menggunakan kata-kata untuk mengklarifikasi huruf saat mengeja melalui telepon, seperti "B as in Bravo" atau "S as in Sierra". Ini disebut alfabet fonetik dan sangat berguna untuk menghindari kebingungan!</p>
                </Tip>
              </>
            )}
            {unitId === '1' && lessonId === '3' && (
              <>
                <p>Dalam pelajaran ini, kita akan mempelajari "kata-kata ajaib" yang akan membuat interaksi Anda dalam bahasa Inggris jauh lebih lancar dan sopan. Frasa kesopanan dasar ini menunjukkan rasa hormat dan merupakan bagian penting dari komunikasi yang efektif, di mana pun Anda berada.</p>
                <p>Menggunakan frasa ini pada waktu yang tepat dapat mengubah nada percakapan secara drastis, dari yang terkesan menuntut menjadi permintaan yang ramah. Ini adalah kunci untuk membangun hubungan baik dengan penutur asli.</p>
                <ul>
                  <li><strong>Thank you:</strong> Diucapkan untuk menunjukkan rasa terima kasih.</li>
                  <li><strong>You're welcome:</strong> Jawaban standar untuk "Thank you".</li>
                  <li><strong>Please:</strong> Digunakan untuk membuat permintaan menjadi lebih sopan.</li>
                  <li><strong>Excuse me:</strong> Untuk mendapatkan perhatian atau saat melewati seseorang.</li>
                  <li><strong>I'm sorry:</strong> Untuk meminta maaf atas kesalahan kecil.</li>
                </ul>
                <p>Bayangkan Anda berada di sebuah kafe. Anda ingin memesan kopi. Alih-alih hanya mengatakan "I want coffee," menambahkan "please" di akhir kalimat ("I want coffee, please.") membuatnya terdengar jauh lebih baik. Inilah kekuatan dari frasa-frasa sederhana ini.</p>
                <Tip>
                  <p>Gunakan <strong>"Excuse me"</strong> untuk memulai pertanyaan kepada orang asing, misalnya, "Excuse me, what time is it?". Ini adalah cara yang sopan untuk menarik perhatian mereka sebelum Anda bertanya.</p>
                </Tip>
              </>
            )}

            {/* Unit 2 Content */}
            {unitId === '2' && lessonId === '1' && (
              <>
                <p>Setelah menguasai dasar-dasar, saatnya memperluas kosakata Anda. Dalam pelajaran ini, kita akan fokus pada kata-kata yang digunakan untuk mendeskripsikan orang-orang di sekitar kita, khususnya keluarga dan pekerjaan. Ini akan memungkinkan Anda untuk berbicara tentang kehidupan pribadi Anda dengan lebih detail.</p>
                <p>Mempelajari istilah untuk anggota keluarga dan pekerjaan adalah langkah penting untuk dapat berbagi lebih banyak tentang diri Anda dan memahami orang lain. Ini adalah kosakata yang sangat umum dalam percakapan sehari-hari.</p>
                <ul>
                  <li><strong>Keluarga Inti:</strong> <i>Mother</i> (Ibu), <i>Father</i> (Ayah), <i>Parents</i> (Orang Tua), <i>Sister</i> (Saudari), <i>Brother</i> (Saudara), <i>Siblings</i> (Saudara kandung).</li>
                  <li><strong>Pekerjaan Umum:</strong> <i>Teacher</i> (Guru), <i>Doctor</i> (Dokter), <i>Engineer</i> (Insinyur), <i>Student</i> (Siswa).</li>
                </ul>
                <p>Dengan kosakata ini, Anda dapat membentuk kalimat sederhana untuk menggambarkan keluarga Anda. Misalnya: "My father is an engineer, and my mother is a teacher. I have one sister." Kalimat-kalimat seperti ini adalah cara yang bagus untuk berlatih dan memulai percakapan.</p>
                 <div className="not-prose">
                    <Dialogue character="Alex" text="What does your father do?" />
                    <Dialogue character="Ben" text="He is a doctor. And your mother?" />
                    <Dialogue character="Alex" text="She is a teacher." />
                </div>
                <Tip>
                    <p>Saat membicarakan pekerjaan, gunakan artikel 'a' atau 'an'. Gunakan 'an' jika nama pekerjaan dimulai dengan bunyi vokal (a, e, i, o, u). Contoh: "He is <strong>an</strong> engineer," bukan "He is <strong>a</strong> engineer."</p>
                </Tip>
              </>
            )}
            {unitId === '2' && lessonId === '2' && (
              <>
                <p>Dalam bahasa Inggris, kita perlu membedakan antara satu benda (tunggal/singular) dan lebih dari satu benda (jamak/plural). Pelajaran ini akan mengajarkan Anda aturan paling dasar dan umum untuk mengubah kata benda dari bentuk tunggal ke jamak, sebuah keterampilan penting untuk deskripsi yang akurat.</p>
                <p>Aturan yang paling umum untuk membentuk kata benda jamak adalah dengan menambahkan '-s' di akhir kata. Meskipun ada banyak pengecualian (yang akan kita pelajari nanti), menguasai aturan dasar ini adalah langkah pertama yang krusial.</p>
                <ul>
                  <li><strong>book</strong> (tunggal) → <strong>books</strong> (jamak)</li>
                  <li><strong>table</strong> (tunggal) → <strong>tables</strong> (jamak)</li>
                  <li><strong>car</strong> (tunggal) → <strong>cars</strong> (jamak)</li>
                  <li><strong>student</strong> (tunggal) → <strong>students</strong> (jamak)</li>
                </ul>
                <p>Sekarang Anda bisa lebih spesifik. Alih-alih hanya mengatakan "I see a car," Anda bisa mengatakan "I see two cars." Perbedaan kecil ini membuat bahasa Inggris Anda jauh lebih presisi dan alami. Perhatikan bagaimana ini mengubah cara Anda mendeskripsikan dunia di sekitar Anda.</p>
                <Tip>
                  <p>Jika sebuah kata benda berakhiran dengan s, x, z, ch, atau sh, Anda biasanya menambahkan '-es' untuk membuatnya jamak. Contoh: <strong>bus</strong> menjadi <strong>buses</strong>, <strong>box</strong> menjadi <strong>boxes</strong>.</p>
                </Tip>
              </>
            )}

            {/* Unit 3 Content */}
            {unitId === '3' && lessonId === '1' && (
              <>
                <p>Selamat datang di salah satu pelajaran tata bahasa terpenting! Kata kerja 'to be' (dalam bentuk <strong>am</strong>, <strong>is</strong>, dan <strong>are</strong>) adalah tulang punggung dari ribuan kalimat dalam bahasa Inggris. Menguasainya berarti Anda membuka kunci untuk mendeskripsikan keadaan, identitas, dan kualitas.</p>
                <p>Penggunaan 'am', 'is', atau 'are' bergantung sepenuhnya pada subjek kalimat (siapa atau apa yang Anda bicarakan). Aturannya sangat konsisten, jadi menghafalkannya akan sangat membantu. Ini adalah fondasi untuk membangun kalimat yang benar secara gramatikal.</p>
                <ul>
                  <li>Gunakan <strong>am</strong> hanya dengan subjek <strong>I</strong>. &rarr; <em>I <strong>am</strong> happy.</em> (Saya senang.)</li>
                  <li>Gunakan <strong>is</strong> dengan subjek tunggal seperti <strong>he, she, it,</strong> atau satu nama/benda. &rarr; <em>She <strong>is</strong> a teacher. The book <strong>is</strong> red.</em></li>
                  <li>Gunakan <strong>are</strong> dengan subjek <strong>you, we, they,</strong> atau subjek jamak. &rarr; <em>You <strong>are</strong> smart. They <strong>are</strong> students.</em></li>
                </ul>
                <p>Perhatikan bagaimana kata kerja ini menghubungkan subjek dengan deskripsinya. Dalam kalimat "He is a doctor," kata 'is' bertindak seperti jembatan yang menghubungkan 'He' (subjek) dengan 'a doctor' (deskripsinya). Tanpa jembatan ini, kalimatnya tidak akan lengkap.</p>
                <Tip>
                  <p>Anda bisa menyingkatnya untuk percakapan yang lebih cepat dan alami! <strong>I am</strong> menjadi <strong>I'm</strong>. <strong>You are</strong> menjadi <strong>You're</strong>. <strong>He is</strong> menjadi <strong>He's</strong>. Contoh: "I'm a student."</p>
                </Tip>
              </>
            )}
            {unitId === '3' && lessonId === '2' && (
              <>
                <p>Setelah Anda bisa membuat kalimat sederhana, sekarang saatnya belajar menunjuk benda. Dalam bahasa Inggris, kita menggunakan <strong>'this'</strong> dan <strong>'that'</strong> untuk menunjuk benda tunggal. Pelajaran ini akan membantu Anda mengidentifikasi objek berdasarkan kedekatannya dengan Anda.</p>
                <p>Aturannya sangat sederhana dan intuitif, berhubungan langsung dengan jarak fisik. 'This' digunakan untuk sesuatu yang berada dalam jangkauan Anda, sementara 'that' untuk sesuatu yang lebih jauh. Ini adalah cara dasar untuk memperjelas apa yang sedang Anda bicarakan.</p>
                <ul>
                  <li>Gunakan <strong>This is...</strong> untuk benda yang <strong>dekat</strong> dengan Anda. &rarr; <em>(sambil memegang buku) <strong>This is</strong> my book.</em></li>
                  <li>Gunakan <strong>That is...</strong> untuk benda yang <strong>jauh</strong> dari Anda. &rarr; <em>(sambil menunjuk mobil di seberang jalan) <strong>That is</strong> a nice car.</em></li>
                </ul>
                <p>Dengan menguasai 'this' dan 'that', Anda dapat berinteraksi dengan lingkungan fisik Anda secara lebih efektif. Anda bisa bertanya, "What is this?" sambil menunjuk sesuatu di tangan Anda, atau "What is that?" untuk menanyakan tentang sesuatu di kejauhan.</p>
                <Tip>
                  <p>Bentuk jamak dari 'this' adalah <strong>'these'</strong> (untuk benda-benda dekat), dan bentuk jamak dari 'that' adalah <strong>'those'</strong> (untuk benda-benda jauh). Contoh: "<strong>These are</strong> my keys," dan "<strong>Those are</strong> beautiful mountains."</p>
                </Tip>
              </>
            )}

            {/* Unit 4 Content */}
            {unitId === '4' && lessonId === '1' && (
              <>
                <p>Kemampuan bertanya adalah inti dari komunikasi dua arah. Dalam pelajaran ini, kita akan mempelajari dua kata tanya paling fundamental: <strong>'What'</strong> untuk menanyakan tentang benda atau informasi, dan <strong>'Who'</strong> untuk menanyakan tentang orang. Ini akan membuka pintu untuk mendapatkan informasi yang Anda butuhkan.</p>
                <p>Menggunakan kata tanya yang tepat sangatlah penting. Jika Anda menggunakan 'Who' untuk menanyakan benda, atau 'What' untuk menanyakan orang, itu akan menyebabkan kebingungan. Memahami perbedaan antara keduanya adalah langkah pertama untuk menjadi komunikator yang efektif.</p>
                <ul>
                  <li>Gunakan <strong>What</strong> untuk menanyakan <strong>informasi</strong> atau <strong>benda</strong>. &rarr; <em><strong>What</strong> is your name? <strong>What</strong> is this?</em></li>
                  <li>Gunakan <strong>Who</strong> untuk menanyakan tentang <strong>orang</strong>. &rarr; <em><strong>Who</strong> is she? <strong>Who</strong> is your teacher?</em></li>
                </ul>
                <p>Mari kita lihat contohnya. Jika Anda melihat sebuah benda aneh di atas meja, Anda akan bertanya, "What is that?". Namun, jika Anda melihat seseorang yang tidak Anda kenal di sebuah pesta, Anda akan bertanya kepada teman Anda, "Who is that?".</p>
                <Tip>
                  <p>Untuk jawaban dari pertanyaan 'What is your name?', Anda bisa menjawab dengan "My name is..." atau lebih santai, "I'm...". Keduanya benar, tetapi yang kedua lebih umum dalam percakapan sehari-hari.</p>
                </Tip>
              </>
            )}
            {unitId === '4' && lessonId === '2' && (
              <>
                <p>Mari kita lanjutkan perjalanan Anda dalam menguasai seni bertanya. Pelajaran ini akan fokus pada <strong>'Where'</strong> untuk menanyakan tentang lokasi, dan <strong>'When'</strong> untuk menanyakan tentang waktu. Keterampilan ini sangat penting untuk navigasi, membuat janji, dan memahami jadwal.</p>
                <p>Mengetahui cara menanyakan lokasi akan membantu Anda saat bepergian atau mencari tempat baru. Demikian pula, menanyakan waktu memungkinkan Anda untuk menjadi tepat waktu dan terorganisir. Ini adalah kata tanya yang sangat praktis untuk kehidupan sehari-hari.</p>
                <ul>
                  <li>Gunakan <strong>Where</strong> untuk menanyakan tentang <strong>lokasi atau tempat</strong>. &rarr; <em><strong>Where</strong> is the station? <strong>Where</strong> do you live?</em></li>
                  <li>Gunakan <strong>When</strong> untuk menanyakan tentang <strong>waktu atau tanggal</strong>. &rarr; <em><strong>When</strong> is the meeting? <strong>When</strong> is your birthday?</em></li>
                </ul>
                <p>Bayangkan Anda tersesat di kota baru. Anda dapat mendekati seseorang dan bertanya, "Excuse me, where is the nearest hotel?". Atau, jika Anda ingin tahu kapan sebuah toko buka, Anda bisa bertanya, "When does the store open?".</p>
                <Tip>
                  <p>Kata tanya lain yang sangat berguna adalah <strong>'Why'</strong> (mengapa) untuk menanyakan alasan, dan <strong>'How'</strong> (bagaimana) untuk menanyakan cara atau kondisi. Contoh: "Why are you late?" dan "How are you today?".</p>
                </Tip>
              </>
            )}

            {/* Unit 5 Content */}
            {unitId === '5' && lessonId === '1' && (
              <>
                <p>Setelah mempelajari kata kerja 'to be', saatnya menambahkan kata kerja penting lainnya ke dalam repertoar Anda. Pelajaran ini fokus pada <strong>'have'</strong> dan <strong>'has'</strong>, yang merupakan kata kerja utama untuk menyatakan kepemilikan. Anda akan belajar cara mengatakan apa yang Anda miliki.</p>
                <p>Sama seperti 'is' dan 'are', pilihan antara 'have' dan 'has' bergantung pada subjek kalimat. Menguasai aturan ini akan memungkinkan Anda untuk berbicara tentang harta benda, hubungan, dan bahkan penyakit dengan benar.</p>
                <ul>
                  <li>Gunakan <strong>have</strong> dengan subjek <strong>I, you, we, they</strong>. &rarr; <em>I <strong>have</strong> a car. We <strong>have</strong> a dog.</em></li>
                  <li>Gunakan <strong>has</strong> dengan subjek <strong>he, she, it</strong>. &rarr; <em>She <strong>has</strong> a new phone. He <strong>has</strong> a question.</em></li>
                </ul>
                <p>Dengan 'have' dan 'has', Anda bisa membuat banyak sekali kalimat praktis. "I have a brother," "She has a meeting at 10," atau "They have two children." Ini adalah salah satu kata kerja paling serbaguna dalam bahasa Inggris.</p>
                <Tip>
                  <p>Dalam kalimat negatif, kita menggunakan 'do not have' (don't have) atau 'does not have' (doesn't have). Contoh: "I <strong>don't have</strong> a car." dan "He <strong>doesn't have</strong> a pet." Perhatikan bahwa kita selalu menggunakan 'have' (bukan 'has') setelah 'doesn't'.</p>
                </Tip>
              </>
            )}
            {unitId === '5' && lessonId === '2' && (
              <>
                <p>Kalimat Anda akan menjadi jauh lebih dinamis setelah pelajaran ini. Kita akan mempelajari beberapa kata kerja aksi (action verbs) paling umum: <strong>'eat'</strong> (makan), <strong>'drink'</strong> (minum), dan <strong>'go'</strong> (pergi). Ini adalah kata-kata yang mendeskripsikan aktivitas inti dalam kehidupan sehari-hari.</p>
                <p>Kata kerja aksi adalah kata yang menunjukkan tindakan. Dengan menambahkannya ke dalam kalimat, Anda beralih dari hanya mendeskripsikan keadaan ("I am happy") menjadi menceritakan apa yang Anda lakukan ("I eat rice"). Ini adalah langkah besar dalam kemampuan bercerita Anda.</p>
                <ul>
                  <li><strong>eat:</strong> Digunakan untuk makanan. &rarr; <em>I <strong>eat</strong> breakfast at 7 AM.</em></li>
                  <li><strong>drink:</strong> Digunakan untuk minuman. &rarr; <em>She <strong>drinks</strong> coffee every morning.</em></li>
                  <li><strong>go:</strong> Digunakan untuk pergerakan ke suatu tempat. &rarr; <em>They <strong>go</strong> to school by bus.</em></li>
                </ul>
                <p>Gabungkan kata-kata ini dengan kosakata yang sudah Anda pelajari untuk membuat kalimat yang lebih kompleks. "I go to the restaurant and I eat chicken." Lihat? Anda sudah bisa menceritakan sebuah urutan kejadian sederhana. Ini adalah kekuatan dari kata kerja aksi.</p>
                <Tip>
                  <p>Untuk subjek 'he', 'she', dan 'it', tambahkan '-s' di akhir kata kerja ini dalam kalimat present tense. Contoh: "I eat," tetapi "He <strong>eats</strong>." "We go," tetapi "She <strong>goes</strong>."</p>
                </Tip>
              </>
            )}
            {unitId === '5' && lessonId === '3' && (
              <>
                <p>Komunikasi bukan hanya tentang fakta, tetapi juga tentang perasaan dan keinginan. Dalam pelajaran ini, Anda akan belajar cara mengekspresikan dua emosi penting: keinginan dengan kata <strong>'want'</strong> (ingin) dan kesukaan dengan kata <strong>'like'</strong> (suka). Ini akan membuat percakapan Anda lebih pribadi dan menarik.</p>
                <p>Menyatakan apa yang Anda inginkan sangat penting dalam situasi seperti memesan di restoran atau berbelanja. Sementara itu, membicarakan apa yang Anda sukai (dan tidak sukai) adalah cara yang bagus untuk menjalin hubungan dengan orang lain dan berbagi tentang kepribadian Anda.</p>
                <ul>
                  <li><strong>want:</strong> Digunakan untuk menyatakan keinginan. Diikuti oleh kata benda. &rarr; <em>I <strong>want</strong> a new book.</em></li>
                  <li><strong>like:</strong> Digunakan untuk menyatakan kesukaan. Diikuti oleh kata benda. &rarr; <em>I <strong>like</strong> cats.</em></li>
                </ul>
                <p>Frasa ini sangat berguna dalam percakapan sehari-hari. Di sebuah kafe, Anda bisa mengatakan, "I want a cup of tea, please." Saat berkenalan dengan teman baru, Anda bisa berbagi, "I like listening to music." Ini membantu orang lain mengenal Anda lebih baik.</p>
                <Tip>
                  <p>Jika Anda ingin mengatakan 'ingin melakukan sesuatu', gunakan pola 'want to + kata kerja'. Contoh: "I <strong>want to go</strong> home." atau "She <strong>wants to eat</strong> pizza."</p>
                </Tip>
              </>
            )}

            {/* Unit 6 Content */}
            {unitId === '6' && lessonId === '1' && (
              <>
                <p>Semua orang suka makan! Pelajaran ini akan memperkaya kosakata Anda dengan nama-nama makanan dan minuman yang umum. Ini sangat penting tidak hanya untuk percakapan sehari-hari, tetapi juga untuk situasi praktis seperti berbelanja atau makan di luar.</p>
                <p>Kita akan membahas beberapa kategori dasar: makanan pokok, protein, sayuran, dan minuman. Mengetahui kata-kata ini akan memberi Anda kepercayaan diri untuk membaca menu, memahami resep, dan membicarakan makanan favorit Anda.</p>
                <ul>
                  <li><strong>Makanan Pokok:</strong> <i>Rice</i> (nasi), <i>Bread</i> (roti), <i>Noodles</i> (mie).</li>
                  <li><strong>Protein:</strong> <i>Chicken</i> (ayam), <i>Fish</i> (ikan), <i>Beef</i> (daging sapi), <i>Egg</i> (telur).</li>
                  <li><strong>Minuman:</strong> <i>Water</i> (air), <i>Tea</i> (teh), <i>Coffee</i> (kopi), <i>Juice</i> (jus).</li>
                </ul>
                <p>Dengan kosakata ini, Anda dapat dengan mudah mengungkapkan preferensi Anda. "I like chicken, but I don't like fish." atau "For breakfast, I usually have bread and a cup of tea." Ini adalah kalimat-kalimat yang sangat praktis dan sering digunakan.</p>
                <Tip>
                  <p>Dalam bahasa Inggris, beberapa makanan dianggap 'uncountable' (tidak bisa dihitung), seperti 'rice' dan 'water'. Anda tidak bisa mengatakan "two rices". Sebagai gantinya, gunakan satuan seperti "two <strong>bowls of</strong> rice" atau "two <strong>glasses of</strong> water".</p>
                </Tip>
              </>
            )}

            {/* Unit 7 Content */}
            {unitId === '7' && lessonId === '1' && (
              <>
                <p>Mampu berbicara tentang rutinitas harian adalah keterampilan percakapan yang sangat baik. Pelajaran ini akan memberi Anda kosakata dan frasa untuk menggambarkan aktivitas Anda dari pagi hingga malam. Ini adalah cara yang bagus untuk berlatih menggunakan *simple present tense* dalam konteks yang bermakna.</p>
                <p>Setiap orang memiliki rutinitas, dan membicarakannya adalah topik yang umum. Dengan mempelajari frasa-frasa ini, Anda akan dapat menjawab pertanyaan seperti "What do you do every day?" dengan percaya diri dan detail.</p>
                <ul>
                  <li><strong>Pagi:</strong> <i>wake up</i> (bangun), <i>take a shower</i> (mandi), <i>have breakfast</i> (sarapan).</li>
                  <li><strong>Siang:</strong> <i>go to work/school</i> (pergi kerja/sekolah), <i>have lunch</i> (makan siang).</li>
                  <li><strong>Malam:</strong> <i>come home</i> (pulang), <i>have dinner</i> (makan malam), <i>watch TV</i> (menonton TV), <i>go to bed</i> (tidur).</li>
                </ul>
                <p>Anda dapat merangkai frasa-frasa ini untuk menceritakan hari Anda. Contoh: "I wake up at 6, have breakfast, and then I go to work. In the evening, I have dinner with my family and watch TV before I go to bed."</p>
                <Tip>
                  <p>Gunakan kata penghubung waktu seperti 'then', 'after that', dan 'before' untuk membuat cerita rutinitas Anda mengalir lebih lancar. Contoh: "I take a shower, <strong>and then</strong> I have breakfast."</p>
                </Tip>
              </>
            )}
            {unitId === '7' && lessonId === '2' && (
              <>
                <p>Tepat waktu adalah hal yang penting di banyak budaya, dan untuk itu, Anda harus bisa menanyakan dan memberitahu waktu. Pelajaran ini akan mengajarkan Anda cara-cara paling umum untuk berbicara tentang jam dalam bahasa Inggris, sebuah keterampilan praktis yang akan Anda gunakan setiap hari.</p>
                <p>Ada beberapa cara untuk memberitahu waktu dalam bahasa Inggris, dari yang sangat sederhana hingga yang sedikit lebih kompleks. Kita akan mulai dengan metode yang paling mudah dan umum digunakan, yaitu dengan hanya menyebutkan jam lalu menitnya.</p>
                <ul>
                  <li><strong>Bertanya:</strong> Cara paling umum untuk menanyakan waktu adalah, <em>"What time is it?"</em> atau <em>"What's the time?"</em></li>
                  <li><strong>Menjawab (Jam Pas):</strong> Gunakan 'o'clock'. &rarr; <em>It's 7 o'clock.</em> (Jam 7 pas).</li>
                  <li><strong>Menjawab (Dengan Menit):</strong> Sebutkan jam, lalu sebutkan menitnya. &rarr; <em>7:30 (seven thirty), 8:15 (eight fifteen).</em></li>
                </ul>
                <p>Metode "jam lalu menit" adalah yang paling aman dan selalu dimengerti. Misalnya, jika seseorang bertanya "What time is it?" dan jam menunjukkan pukul 10:25, jawaban paling jelas adalah "It's ten twenty-five."</p>
                <Tip>
                  <p>Untuk 30 menit, Anda juga bisa menggunakan frasa 'half past'. Jadi, 7:30 bisa juga disebut "It's <strong>half past seven</strong>". Demikian pula, 15 menit bisa disebut 'a quarter past' (misal: 7:15 adalah 'a quarter past seven') dan 45 menit bisa disebut 'a quarter to' (misal: 7:45 adalah 'a quarter to eight').</p>
                </Tip>
              </>
            )}
          </>
        )}

        {lesson.type === 'Quiz' && (
          <>
            <p>
              Saatnya menguji pengetahuan Anda! Jawablah pertanyaan-pertanyaan
              berikut berdasarkan apa yang telah Anda pelajari di unit ini.
            </p>
            <Card className="my-6 not-prose">
              <CardContent className="p-6 space-y-6">
                <div className="space-y-2">
                  <p className="font-semibold">Pertanyaan 1:</p>
                  <p className="text-muted-foreground">
                    Konten kuis sedang dalam pengembangan. Fitur kuis interaktif
                    akan segera hadir!
                  </p>
                </div>
              </CardContent>
            </Card>
          </>
        )}

        {lesson.type === 'Practice' && (
          <div className="not-prose">
            <p>
              Latihan interaktif ini akan membantu Anda menerapkan apa yang
              telah Anda pelajari.
            </p>
            <Practice>
              {/* Unit 2 Practice */}
              {unitId === '2' && lessonId === '3' && (
                <p>
                  Sebutkan 5 benda yang Anda lihat di ruangan Anda sekarang
                  dalam bahasa Inggris. Contoh: "This is a chair."
                </p>
              )}
              {/* Unit 3 Practice */}
              {unitId === '3' && lessonId === '3' && (
                <p>
                  Buat 3 kalimat sederhana tentang diri Anda. Contoh: "I am a
                  student. I am happy. I am not a doctor."
                </p>
              )}
              {/* Unit 4 Practice */}
              {unitId === '4' && lessonId === '3' && (
                <div className="space-y-4">
                  <p>
                    Latih dialog singkat ini dengan teman atau dengan diri
                    sendiri.
                  </p>
                  <Dialogue character="A" text="Hi! How are you?" />
                  <Dialogue character="B" text="I'm fine, thank you. And you?" />
                  <Dialogue character="A" text="I'm great, thanks!" />
                </div>
              )}
              {/* Unit 6 Practice */}
              {unitId === '6' && lessonId === '2' && (
                <div className="space-y-4">
                  <p>
                    Bayangkan Anda berada di sebuah restoran. Latih dialog ini.
                  </p>
                  <Dialogue character="Waiter" text="Hello. Can I help you?" />
                  <Dialogue
                    character="You"
                    text="Yes, please. I want one pizza and one water."
                  />
                  <Dialogue
                    character="Waiter"
                    text="Okay. One pizza and one water. Anything else?"
                  />
                  <Dialogue character="You" text="No, thank you." />
                </div>
              )}
              {/* Unit 8 Practice */}
              {unitId === '8' && lessonId === '1' && (
                <div className="space-y-4">
                  <p>
                    <strong>Skenario:</strong> Anda bertemu teman baru di sebuah
                    acara.
                  </p>
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Sapa dia. (Hi/Hello)</li>
                    <li>Perkenalkan diri Anda. (My name is...)</li>
                    <li>Tanyakan namanya. (What is your name?)</li>
                    <li>Tanyakan apa pekerjaannya. (What is your job?)</li>
                    <li>
                      Katakan senang bertemu dengannya. (Nice to meet you.)
                    </li>
                  </ol>
                </div>
              )}
              {unitId === '8' && lessonId === '2' && (
                <div className="space-y-4">
                  <p>
                    <strong>Skenario:</strong> Anda berada di kafe dan ingin
                    memesan.
                  </p>
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Sapa barista. (Hello)</li>
                    <li>Katakan apa yang Anda inginkan. (I want...)</li>
                    <li>Gunakan 'please' untuk kesopanan.</li>
                    <li>Ucapkan terima kasih. (Thank you)</li>
                  </ol>
                </div>
              )}
            </Practice>
          </div>
        )}
      </div>

      <PronunciationCoach />

      <div className="mt-8 mb-4 text-center">
        <Button asChild size="lg">
          <Link
            href={`/learn/${unitId}?completedLessonId=${lesson.id}`}
          >
            <Check className="mr-2 h-4 w-4" />
            Selesaikan Pelajaran
          </Link>
        </Button>
      </div>
    </div>
  );
}
