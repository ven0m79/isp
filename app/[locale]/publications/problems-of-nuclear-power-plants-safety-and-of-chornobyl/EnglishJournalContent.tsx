type EnglishJournalContentProps = {
  content: string;
};

const headings = {
  editorial: "Editorial board",
  rules: "Rules for Authors",
  format: "The format of the electronic version of the article",
  location: "Location of material of the article",
  ethics: "Publication ethics and malpractice statement",
  general: "GENERAL PRINCIPLES",
  editor: "EDITOR-IN-CHIEF AND PUBLISHER PROFESSIONAL ETHICS PRINCIPLES",
  reviewer: "REVIEWER ACTIVITIES PROFESSIONAL ETHICS PRINCIPLES",
  authors: "PRINCIPLES TO BE GUIDED BY AUTHORS OF SCIENTIFIC ARTICLE",
} as const;

function SectionHeading({ children }: { children: string }) {
  return (
    <h2 className="border-l-4 border-[#1682BF] pl-4 text-2xl font-bold leading-tight text-[#002766]">
      {children}
    </h2>
  );
}

function SubsectionHeading({ children }: { children: string }) {
  return (
    <h3 className="text-lg font-bold leading-snug text-[#07518F] md:text-xl">
      {children}
    </h3>
  );
}

function PrincipleList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={`${index}-${item}`} className="flex gap-3 text-sm leading-7 text-gray-700">
          <span className="mt-[11px] h-2 w-2 shrink-0 rounded-full bg-[#1682BF]" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function EnglishJournalContent({ content }: EnglishJournalContentProps) {
  const lines = content.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  const at = (heading: string) => lines.indexOf(heading);

  const editorialIndex = at(headings.editorial);
  const rulesIndex = at(headings.rules);
  const formatIndex = at(headings.format);
  const locationIndex = at(headings.location);
  const ethicsIndex = at(headings.ethics);
  const generalIndex = at(headings.general);
  const editorIndex = at(headings.editor);
  const reviewerIndex = at(headings.reviewer);
  const authorsIndex = at(headings.authors);

  const aboutParagraphs = lines.slice(1, editorialIndex);
  const editorialRows = lines.slice(editorialIndex + 1, rulesIndex).map((line) => {
    const [name, ...roleParts] = line.split("\t");
    return { name, role: roleParts.join("\t") };
  });
  const rulesIntro = lines.slice(rulesIndex + 1, formatIndex);
  const formatRules = lines.slice(formatIndex + 1, locationIndex);
  const locationRules = lines.slice(locationIndex + 1, ethicsIndex);
  const generalPrinciples = lines.slice(generalIndex + 1, editorIndex);
  const editorIntro = lines[editorIndex + 1];
  const editorPrinciples = lines.slice(editorIndex + 2, reviewerIndex);
  const reviewerIntro = lines[reviewerIndex + 1];
  const reviewerPrinciples = lines.slice(reviewerIndex + 2, authorsIndex);
  const authorsIntro = lines[authorsIndex + 1];
  const authorPrinciples = lines.slice(authorsIndex + 2);

  return (
    <article className="p-2 text-[#002766] md:p-4">
      <header className="overflow-hidden rounded-2xl border border-[#c8d8ea] bg-gradient-to-br from-white via-[#f5f9fc] to-[#dcebf6] px-5 py-8 text-[#002766] shadow-sm sm:px-8 md:py-10">
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl">{lines[0]}</h1>
        <p className="mt-5 max-w-4xl text-base leading-8 text-[#294e70] sm:text-lg">{aboutParagraphs[0]}</p>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {aboutParagraphs.slice(1).map((paragraph) => (
            <p key={paragraph} className="rounded-xl border border-[#c8d8ea] bg-white/80 p-4 text-sm leading-7 text-gray-700">
              {paragraph}
            </p>
          ))}
        </div>
      </header>

      <div className="mt-6 space-y-6">
        <section className="rounded-2xl border border-[#c8d8ea] bg-white p-5 shadow-sm md:p-7">
          <SectionHeading>{headings.editorial}</SectionHeading>
          <div className="mt-5 overflow-hidden rounded-xl border border-[#c8d8ea]">
            <div className="hidden grid-cols-[minmax(180px,0.7fr)_minmax(0,1.8fr)] bg-[#dcebf6] px-5 py-3 text-xs font-bold uppercase tracking-wide text-[#07518F] sm:grid">
              <span>Name</span>
              <span>Role and affiliation</span>
            </div>
            <div className="divide-y divide-[#dce7f1]">
              {editorialRows.map((member, index) => (
                <div key={`${index}-${member.name}`} className="grid gap-1 px-5 py-4 sm:grid-cols-[minmax(180px,0.7fr)_minmax(0,1.8fr)] sm:gap-6 even:bg-[#f5f9fc]">
                  <p className="font-bold text-[#002766]">{member.name}</p>
                  <p className="text-sm leading-6 text-gray-700">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-[#c8d8ea] bg-white p-5 shadow-sm md:p-7">
          <SectionHeading>{headings.rules}</SectionHeading>
          {rulesIntro.map((paragraph) => <p key={paragraph} className="mt-5 text-justify text-sm leading-7 text-gray-700">{paragraph}</p>)}

          <div className="mt-7 rounded-xl bg-[#EFF4FB] p-5 md:p-6">
            <SubsectionHeading>{headings.format}</SubsectionHeading>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {formatRules.map((rule) => (
                <p key={rule} className="rounded-lg border border-[#c8d8ea] bg-white p-4 text-sm leading-7 text-gray-700 shadow-sm">{rule}</p>
              ))}
            </div>
          </div>

          <div className="mt-7">
            <SubsectionHeading>{headings.location}</SubsectionHeading>
            <div className="mt-4 space-y-3">
              {locationRules.map((rule, index) => (
                <div key={`${index}-${rule}`} className="flex gap-4 rounded-lg border border-[#dce7f1] p-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#dcebf6] text-xs font-bold text-[#07518F]">{index + 1}</span>
                  <p className="text-sm leading-7 text-gray-700">{rule}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-[#c8d8ea] bg-white p-5 shadow-sm md:p-7">
          <SectionHeading>{headings.ethics}</SectionHeading>

          <div className="mt-7 space-y-8">
            <div>
              <SubsectionHeading>{headings.general}</SubsectionHeading>
              <div className="mt-4 space-y-3 border-l-2 border-[#c8d8ea] pl-5">
                {generalPrinciples.map((paragraph) => <p key={paragraph} className="text-justify text-sm leading-7 text-gray-700">{paragraph}</p>)}
              </div>
            </div>

            <div className="rounded-xl bg-[#EFF4FB] p-5 md:p-6">
              <SubsectionHeading>{headings.editor}</SubsectionHeading>
              <p className="mt-3 text-sm leading-7 text-gray-700">{editorIntro}</p>
              <div className="mt-4"><PrincipleList items={editorPrinciples} /></div>
            </div>

            <div className="rounded-xl border border-[#c8d8ea] p-5 md:p-6">
              <SubsectionHeading>{headings.reviewer}</SubsectionHeading>
              <p className="mt-3 text-sm leading-7 text-gray-700">{reviewerIntro}</p>
              <div className="mt-4"><PrincipleList items={reviewerPrinciples} /></div>
            </div>

            <div className="rounded-xl border border-[#c8d8ea] bg-[#EFF4FB] p-5 text-[#002766] md:p-6">
              <h3 className="text-lg font-bold leading-snug text-[#07518F] md:text-xl">{headings.authors}</h3>
              <p className="mt-3 text-sm leading-7 text-gray-700">{authorsIntro}</p>
              <ul className="mt-4 space-y-3">
                {authorPrinciples.map((item, index) => (
                  <li key={`${index}-${item}`} className="flex gap-3 text-sm leading-7 text-gray-700">
                    <span className="mt-[11px] h-2 w-2 shrink-0 rounded-full bg-[#1682BF]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
