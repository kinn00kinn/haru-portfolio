import { Routes, Route, Link } from "react-router-dom";
import "./App.css"; // あとでスタイルを追加するためにインポートしておきます

// --- サンプルページコンポーネント ---
// 実際にはこれらを別ファイル（例: src/pages/Home.tsx）に分けてもOKです

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>ポートフォリオのホームページです。</p>
  </div>
);

const About = () => (
  <div>
    <h2>About Me</h2>
    <p>自己紹介ページです。</p>
  </div>
);

const Projects = () => (
  <div>
    <h2>Projects</h2>
    <p>制作物一覧ページです。</p>
  </div>
);

// --- Appコンポーネント（メイン） ---
export default function App() {
  return (
    <div className="App">
      {/* 1. 全ページ共通のナビゲーション（ヘッダー） */}
      <nav style={{ padding: "1rem", backgroundColor: "#eee" }}>
        <Link to="/" style={{ marginRight: "1rem" }}>
          Home
        </Link>
        <Link to="/about" style={{ marginRight: "1rem" }}>
          About
        </Link>
        <Link to="/projects">Projects</Link>
      </nav>

      <hr />

      {/* 2. ページコンテンツの表示エリア */}
      {/* URL（ハッシュ）に応じて、ここの中身が切り替わります */}
      <main style={{ padding: "1rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </div>
  );
}
