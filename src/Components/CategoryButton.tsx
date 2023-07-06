import { ReactNode } from "react";
import { overrideTailwindClasses } from "tailwind-override";

export type Variants = "Default" | "Simple" | "Luxury" | "Rugged";

interface Props {
  children: ReactNode;
  variant?: Variants;
  unstyled?: boolean;
}

type VariantMap = {
  [key in Variants]: string;
};

const base =
  "font-semibold align-middle px-4 sm:px-6 py-[6px] w-fit max-w-[105px] bg-[#FFEAD0] text-neutral-700 text-center capitalize rounded-md";

const styles: VariantMap = {
  Default: base,
  Simple: "bg-[#E17654] text-neutral-100 font-semibold",
  Luxury: "bg-[#161616] text-neutral-100 font-semibold",
  Rugged: "bg-[#115E59] text-neutral-100 font-semibold",
};

const variantMap: VariantMap = {
  Default: base,
  Simple: overrideTailwindClasses(base + " " + styles.Simple),
  Luxury: overrideTailwindClasses(base + " " + styles.Luxury),
  Rugged: overrideTailwindClasses(base + " " + styles.Rugged),
};

const baseStyleMap: VariantMap = {
  Default: base,
  Simple:
    base +
    " hover:bg-[#E17654] hover:text-neutral-100 hover:font-semibold " +
    "focus:bg-[#E17654] focus:text-neutral-100 focus:font-semibold " +
    "active:bg-[#E17654] active:text-neutral-100 active:font-semibold",
  Luxury:
    base +
    " hover:bg-[#161616] hover:text-neutral-100 hover:font-semibold " +
    "focus:bg-[#161616] focus:text-neutral-100 focus:font-semibold " +
    "active:bg-[#161616] active:text-neutral-100 active:font-semibold",
  Rugged:
    base +
    " hover:bg-[#115E59] hover:text-neutral-100 hover:font-semibold " +
    "focus:bg-[#115E59] focus:text-neutral-100 focus:font-semibold " +
    "active:bg-[#115E59] active:text-neutral-100 active:font-semibold",
};

function CategoryButton({ children, variant = "Default", unstyled }: Props) {
  return (
    <button
      type="button"
      className={unstyled ? baseStyleMap[variant] : variantMap[variant]}
    >
      {children}
    </button>
  );
}
export default CategoryButton;
