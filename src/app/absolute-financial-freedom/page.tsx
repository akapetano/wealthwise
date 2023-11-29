import { FinancialSecurityForm } from "@/components/FinancialSecurityForm";
import { FormWrapper } from "@/components/shared/FormWrapper";

export default function AbsoluteFinancialFreedom() {
  return (
    <FormWrapper
      prevLevelUrl="/financial-freedom"
      title="5: Absolute Financial Freedom"
    >
      <FinancialSecurityForm />
    </FormWrapper>
  );
}
