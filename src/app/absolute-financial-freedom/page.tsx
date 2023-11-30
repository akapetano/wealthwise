import { AbsoluteFinancialFreedomForm } from "@/components/features/AbsoluteFinancialFreedomForm";
import { FormWrapper } from "@/components/shared/FormWrapper";
import { FORMS_INFO } from "@/constants";

export default function AbsoluteFinancialFreedom() {
  return (
    <FormWrapper
      prevLevelUrl="/financial-freedom"
      title={FORMS_INFO.absoluteFinancialFreedom.title}
      description={FORMS_INFO.absoluteFinancialFreedom.description}
    >
      <AbsoluteFinancialFreedomForm />
    </FormWrapper>
  );
}
