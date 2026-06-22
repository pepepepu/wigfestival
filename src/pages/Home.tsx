import { useState } from "react";
import styled, { css } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { BackgroundVideo } from "../components/BackgroundVideo";
import wigImage from "../assets/media/wig3.png";
import emailjs from "@emailjs/browser";

const textureEffectWhite = css`
  background-color: #fff;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.35'/%3E%3C/svg%3E");
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  -webkit-text-stroke: 0.5px rgba(0, 0, 0, 0.4);
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.7));
`;

const textureEffectGreen = css`
  background-color: #fff;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.35'/%3E%3C/svg%3E");
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  -webkit-text-stroke: 1px #1e1e1e34;
`;

const Overlay = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.16);
  color: #fff;
`;

const Card = styled(motion.div)`
  text-align: center;
  max-width: 600px;
  height: 90%;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 80%;
  height: auto;
`;

const Text = styled.p`
  font-size: 5dvw;
  font-weight: 300;
  letter-spacing: -0.5px;
  text-transform: lowercase;
  ${textureEffectGreen}
  text-align: justify;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Highlight = styled.div`
  flex: 1;
  padding: 1.5rem;
  font-size: 4.5dvw;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 40px 0px;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }

  span {
    ${textureEffectWhite}
  }
`;

const Button = styled.button`
  background: transparent;
  font-size: 7dvw;
  letter-spacing: -2px;
  width: 90%;
  max-width: 600px;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 300;
  text-transform: lowercase;
  text-decoration-color: #1cd444;
  text-decoration: underline;
  transition:
    transform 0.2s,
    opacity 0.2s;
  ${textureEffectGreen}

  @media (min-width: 768px) {
    font-size: 2rem;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

const SuccessButton = styled(Button)`
  font-size: 5dvw;
  letter-spacing: -0.5px;
  margin-top: 20px;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Input = styled.input`
  width: 90%;
  padding: 0.9rem 1.5rem;
  border-radius: 2px;
  border: 2px solid rgba(255, 255, 255, 1);
  font-size: 5dvw;
  font-weight: 300;
  color: rgba(255, 255, 255, 1);
  background: transparent;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 1);
  }
`;

const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 1rem;
  cursor: pointer;
  text-align: left;
  font-size: 4dvw;
  width: 100%;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }

  span {
    font-size: 4.5dvw;
    font-weight: 300;

    @media (min-width: 768px) {
      font-size: 1.2rem;
    }
  }
`;

type Step = "hero" | "form" | "success";

export function Home() {
  const [step, setStep] = useState<Step>("hero");
  const [name, setName] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleConfirm = async () => {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        "service_8gt4w18",
        "template_llcz1v7",
        {
          nome: name,
          bebida: acceptedTerms ? "Sim" : "Não",
          email_destino: "jujumerq@gmail.com",
        },
        "2YULp3swOMMiQelOb",
      );
      setStep("success");
    } catch (error) {
      alert("Erro ao confirmar presença. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCalendar = () => {
    const title = encodeURIComponent("wigFestival");
    const details = encodeURIComponent(
      "Festa wigFestival! Lembre-se: Peruca obrigatória.",
    );
    const location = encodeURIComponent(
      "Rua C, nº 73, Santos Dumont, Aracaju, Sergipe",
    );
    const startDateGCal = "20260711T230000Z";
    const endDateGCal = "20260712T050000Z";

    const userAgent =
      navigator.userAgent || navigator.vendor || (window as any).opera;
    const isIOS =
      /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream;
    const isAndroid = /android/i.test(userAgent);

    if (isIOS || isAndroid) {
      const icsData =
        "BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nDTSTART;TZID=America/Maceio:20260711T200000\nDTEND;TZID=America/Maceio:20260712T020000\nSUMMARY:wigFestival\nDESCRIPTION:Festa wigFestival! Lembre-se: Peruca obrigatória.\nLOCATION:Rua C, nº 73, Santos Dumont, Aracaju, Sergipe\nEND:VEVENT\nEND:VCALENDAR";

      const blob = new Blob([icsData], { type: "text/calendar;charset=utf-8" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "wigFestival.ics");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDateGCal}/${endDateGCal}&details=${details}&location=${location}`;
      window.open(googleCalendarUrl, "_blank");
    }
  };

  return (
    <>
      <BackgroundVideo />
      <Overlay>
        <AnimatePresence mode="wait">
          {step === "hero" && (
            <Card
              key="hero"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Logo src={wigImage} alt="wigFestival Logo" />
                <Text>Traga seu alter ego. Traga sua peruca.</Text>
                <Highlight style={{ gap: "10px" }}>
                  <Text>Erick e Pedro vão comemorar mais um ano de vida.</Text>
                  <Text>
                    E, para marcar a ocasião, todos os convidados terão a
                    oportunidade de viver uma noite como outra pessoa.
                  </Text>
                  <Text>
                    A única regra da festa é bem simples:{" "}
                    <strong style={{ fontWeight: "800" }}>
                      Peruca obrigatória.
                    </strong>
                  </Text>
                </Highlight>
              </div>
              <Button onClick={() => setStep("form")}>detalhes da festa</Button>
            </Card>
          )}

          {step === "form" && (
            <Card
              key="form"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              <Text>detalhes da festa</Text>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flex: 1,
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "30px",
                }}
              >
                <div
                  style={{
                    width: "90%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <Text>
                    A comemoração acontece no dia{" "}
                    <strong
                      style={{ fontWeight: "800", textDecoration: "underline" }}
                    >
                      {" "}
                      11 de julho (sábado)
                    </strong>
                    , a partir das{" "}
                    <strong
                      style={{ fontWeight: "800", textDecoration: "underline" }}
                    >
                      20h
                    </strong>
                    .
                  </Text>
                  <Text>
                    Esperamos você na{" "}
                    <strong
                      style={{ fontWeight: "800", textDecoration: "underline" }}
                    >
                      Rua C, nº 73, Santos Dumont
                    </strong>
                    , para celebrar essa noite especial com a gente.
                  </Text>
                  <Text>
                    Antes de assumir seu alter ego, deixe{" "}
                    <strong
                      style={{ fontWeight: "800", textDecoration: "underline" }}
                    >
                      seu nome abaixo
                    </strong>{" "}
                    para confirmar sua presença.
                  </Text>
                </div>
                <div style={{ width: "100%" }}>
                  <Input
                    type="text"
                    placeholder="seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <CheckboxContainer>
                    <input
                      type="checkbox"
                      checked={acceptedTerms}
                      onChange={(e) => setAcceptedTerms(e.target.checked)}
                    />
                    <span>concordo em levar uma bebida pra festa</span>
                  </CheckboxContainer>
                </div>
              </div>
              <Button
                onClick={handleConfirm}
                disabled={!name.trim() || !acceptedTerms || isSubmitting}
              >
                {isSubmitting ? "enviando..." : "confirmar que eu vou!"}
              </Button>
            </Card>
          )}

          {step === "success" && (
            <Card
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
              style={{ justifyContent: "center" }}
            >
              <Text style={{ textAlign: "center" }}>
                Obrigado, {name}.<br></br> nos vemos lá
              </Text>
              <SuccessButton onClick={handleCalendar}>
                adicionar na agenda
              </SuccessButton>
            </Card>
          )}
        </AnimatePresence>
      </Overlay>
    </>
  );
}
