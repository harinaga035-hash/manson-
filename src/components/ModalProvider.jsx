import { createContext, useCallback, useContext, useState } from "react";
import { BrochureModal } from "./BrochureModal";
import { EnquireModal } from "./EnquireModal";

const ModalCtx = createContext({ open: () => {}, close: () => {} });

export function ModalProvider({ children }) {
  const [kind, setKind] = useState(null);
  const open = useCallback((k) => setKind(k), []);
  const close = useCallback(() => setKind(null), []);

  return (
    <ModalCtx.Provider value={{ open, close }}>
      {children}
      {kind === "brochure" && <BrochureModal onClose={close} />}
      {kind === "enquire" && <EnquireModal onClose={close} />}
    </ModalCtx.Provider>
  );
}

export const useModals = () => useContext(ModalCtx);
