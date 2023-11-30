import { AbsoluteFinancialFreedomForm } from "@/components/features/AbsoluteFinancialFreedomForm";
import { FormWrapper } from "@/components/shared/FormWrapper";

export default function AbsoluteFinancialFreedom() {
  return (
    <FormWrapper
      prevLevelUrl="/financial-freedom"
      title="5: Absolute Financial Freedom"
    >
      <AbsoluteFinancialFreedomForm />
    </FormWrapper>
  );
}
