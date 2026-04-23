import { MainLayout } from "@app/components/templates";

const C = {
  dir:    "#0061AA",
  dept:   "#51749E",
  div:    "#EFF4FB",
  line:   "#51749E",
  textW:  "#FFFFFF",
  textD:  "#002766",
  stroke: "#4A6FA5",
};

function Box({ x, y, w, h, lines, level }: {
  x: number; y: number; w: number; h: number;
  lines: string[]; level: 0 | 1 | 2;
}) {
  const fill  = [C.dir,   C.dept,  C.div  ][level];
  const color = [C.textW, C.textW, C.textD][level];
  const fSize = [14,      12,      10     ][level];
  const fWt   = ["700",   "600",   "500"  ][level];
  const lh    = fSize * 1.5;
  const baseY = y + (h - lines.length * lh) / 2 + fSize;

  return (
    <g filter="url(#sh)">
      <rect x={x} y={y} width={w} height={h} rx={5}
        fill={fill} stroke={C.stroke} strokeWidth={1} />
      {lines.map((ln, i) => (
        <text key={i} x={x + w / 2} y={baseY + i * lh}
          textAnchor="middle"
          fill={color} fontSize={fSize} fontWeight={fWt}
          fontFamily="Roboto, sans-serif">
          {ln}
        </text>
      ))}
    </g>
  );
}

function Ln({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={C.line} strokeWidth={1.5} />;
}

export default function Structure() {
  return (
    <MainLayout>
      <div className="flex flex-col w-full p-4">
        <h2 className="text-center font-bold text-[#002766] mb-6 text-xl">
          Структура ІПБ АЕС НАН України
        </h2>

        <div className="w-full overflow-x-auto">
          <svg viewBox="0 0 980 340" width="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="sh" x="-5%" y="-5%" width="115%" height="125%">
                <feDropShadow dx="0" dy="2" stdDeviation="2"
                  floodColor="#002766" floodOpacity="0.12" />
              </filter>
            </defs>

            {/* ── connectors (drawn first, behind boxes) ── */}

            {/* Director → horizontal bar at y=90 */}
            <Ln x1={500} y1={65}  x2={500} y2={90}  />
            <Ln x1={160} y1={90}  x2={840} y2={90}  />
            <Ln x1={160} y1={90}  x2={160} y2={110} />
            <Ln x1={840} y1={90}  x2={840} y2={110} />

            {/* Dept 1 (cx=160) → its two divisions */}
            <Ln x1={160} y1={190} x2={160} y2={215} />
            <Ln x1={85}  y1={215} x2={235} y2={215} />
            <Ln x1={85}  y1={215} x2={85}  y2={235} />
            <Ln x1={235} y1={215} x2={235} y2={235} />

            {/* Dept 2 (cx=500) → its two divisions */}
            <Ln x1={500} y1={190} x2={500} y2={215} />
            <Ln x1={425} y1={215} x2={575} y2={215} />
            <Ln x1={425} y1={215} x2={425} y2={235} />
            <Ln x1={575} y1={215} x2={575} y2={235} />

            {/* Dept 3 (cx=840) → its two divisions */}
            <Ln x1={840} y1={190} x2={840} y2={215} />
            <Ln x1={765} y1={215} x2={915} y2={215} />
            <Ln x1={765} y1={215} x2={765} y2={235} />
            <Ln x1={915} y1={215} x2={915} y2={235} />

            {/* ── boxes ── */}

            {/* Level 0 – Director */}
            <Box x={360} y={15}  w={280} h={50} level={0}
              lines={["ДИРЕКТОР"]} />

            {/* Level 1 – Departments */}
            <Box x={20}  y={110} w={280} h={80} level={1}
              lines={["Відділення", "атомної енергетики"]} />
            <Box x={360} y={110} w={280} h={80} level={1}
              lines={["Відділення проектування", "об'єктів з радіаційно-", "ядерними технологіями"]} />
            <Box x={700} y={110} w={280} h={80} level={1}
              lines={["Відділення ядерної", "та радіаційної безпеки"]} />

            {/* Level 2 – Divisions under Dept 1 */}
            <Box x={20}  y={235} w={130} h={65} level={2}
              lines={["Відділ безпеки", "реакторів"]} />
            <Box x={170} y={235} w={130} h={65} level={2}
              lines={["Відділ аналізу", "аварій"]} />

            {/* Level 2 – Divisions under Dept 2 */}
            <Box x={360} y={235} w={130} h={65} level={2}
              lines={["Відділ", "проектування"]} />
            <Box x={510} y={235} w={130} h={65} level={2}
              lines={["Відділ радіаційного", "захисту"]} />

            {/* Level 2 – Divisions under Dept 3 */}
            <Box x={700} y={235} w={130} h={65} level={2}
              lines={["Відділ ядерної", "безпеки"]} />
            <Box x={850} y={235} w={130} h={65} level={2}
              lines={["Відділ", "моніторингу"]} />
          </svg>
        </div>
      </div>
    </MainLayout>
  );
}
