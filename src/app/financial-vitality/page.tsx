import { FinancialVitalityForm } from "@/components/FinancialVitalityForm";
import { FormWrapper } from "@/components/shared/FormWrapper";

export default function FinancialVitality() {
  return (
    <FormWrapper prevLevelUrl="/financial-security" title="Financial Vitality">
      <FinancialVitalityForm />
    </FormWrapper>
  );
}
