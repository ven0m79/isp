import DepartmentLocalContent from "./DepartmentLocalContent";
import StructureUnitPage from "./StructureUnitPage";
import {
  localDepartmentPages,
  LocalDepartmentPageId,
} from "../_data/departmentPages";

export default function LocalDepartmentPage({ unitId }: { unitId: LocalDepartmentPageId }) {
  const config = localDepartmentPages[unitId];

  return (
    <StructureUnitPage unitId={config.unitId}>
      <DepartmentLocalContent
        namespace={config.namespace}
        assetDir={config.assetDir}
        portraitFile={config.portraitFile}
        workFiles={[...config.workFiles]}
      />
    </StructureUnitPage>
  );
}
