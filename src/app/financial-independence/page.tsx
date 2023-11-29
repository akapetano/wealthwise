import { FinancialSecurityForm } from "@/components/FinancialSecurityForm";
import { FormWrapper } from "@/components/shared/FormWrapper";

export default function FinancialIndependence() {
  return (
    <FormWrapper
      prevLevelUrl="/financial-vitality"
      nextLevelUrl="/financial-freedom"
      title="3: Financial Independence"
    >
      <FinancialSecurityForm />
    </FormWrapper>
  );
}
