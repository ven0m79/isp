import DepartmentLocalContent from "./DepartmentLocalContent";
import StructureUnitPage from "./StructureUnitPage";
import {
  registeredUnitPages,
  RegisteredUnitPageId,
} from "../_data/unitPages";

export default function RegisteredUnitPage({ unitId }: { unitId: RegisteredUnitPageId }) {
  const config = registeredUnitPages[unitId];

  return (
    <StructureUnitPage unitId={config.unitId}>
      <DepartmentLocalContent
        namespace={config.namespace}
        assetDir={config.assetDir}
        portraitFile={"portraitFile" in config ? config.portraitFile : undefined}
        workFiles={[...config.workFiles]}
      />
    </StructureUnitPage>
  );
}
