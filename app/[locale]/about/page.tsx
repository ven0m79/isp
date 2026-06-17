import { MainLayout } from "@app/components/templates";
import Image from "next/image";

export default function About() {
  return (
    <MainLayout>
      <article className="flex flex-col gap-5 text-[#002766] p-2">
        <h2 className="text-xl font-bold border-b-2 border-[#51749E] pb-2">
          Про Інститут
        </h2>
        <div className="flex flex-col gap-4 mt-2">
          <div className="border-l-4 border-[#0061AA] pl-4">
            <h3 className="text-base font-bold border-b-2 border-[#51749E] pb-1 mb-2">
              МІСІЯ
            </h3>
            <p className="leading-relaxed text-sm">
              Створювати, набувати, розвивати, розповсюджувати та застосовувати наукові знання і передові технології
              з метою безпечного використання ядерної енергії, запобігання та зменшення наслідків радіаційних аварій
              на благо суспільства.
            </p>
          </div>

          <div className="border-l-4 border-[#0061AA] pl-4">
            <h3 className="text-base font-bold border-b-2 border-[#51749E] pb-1 mb-2">
              БАЧЕННЯ МАЙБУТНЬОГО
            </h3>
            <p className="leading-relaxed text-sm">
              Інститут стане провідною науковою установою України, яка надаватиме науково-технічні, інженерні,
              методичні та інформаційні послуги в галузі безпечної експлуатації об'єктів з ядерними технологіями,
              ліквідації наслідків радіаційних аварій, зняття з експлуатації ядерних установок, поводження з
              радіоактивними відходами та відпрацьованим ядерним паливом і яка матиме національний та міжнародний
              престиж.
            </p>
          </div>
        </div>
      </article>
    </MainLayout>
  );
}
