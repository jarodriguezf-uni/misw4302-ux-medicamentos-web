import type { ReactNode } from "react";
import { createBrowserRouter } from "react-router-dom";
import { AccountPage } from "../features/account/screens/AccountPage";
import { LoginPage } from "../features/auth/screens/LoginPage";
import { PublicHomePage } from "../features/auth/screens/PublicHomePage";
import { DashboardPage } from "../features/dashboard/screens/DashboardPage";
import { LocationDetailPage } from "../features/locations/screens/LocationDetailPage";
import { LocationsPage } from "../features/locations/screens/LocationsPage";
import { MedicineDetailPage } from "../features/medicines/screens/MedicineDetailPage";
import { MedicineSearchPage } from "../features/medicines/screens/MedicineSearchPage";
import { PrescriptionPage } from "../features/medicines/screens/PrescriptionPage";
import { TreatmentPage } from "../features/medicines/screens/TreatmentPage";
import { SignupScreen } from "../features/onboarding/screens/SignupScreen";
import { VerifyEmailScreen } from "../features/onboarding/screens/VerifyEmailScreen";
import { ConsentScreen } from "../features/onboarding/screens/ConsentScreen";
import { EpsScreen } from "../features/onboarding/screens/EpsScreen";
import { EpsStatusScreen } from "../features/onboarding/screens/EpsStatusScreen";
import { PlaceholderScreen } from "../shared/components/PlaceholderScreen";

interface RouteDefinition {
  path: string;
  frameLabel: string;
  name: string;
  visualNodeId: string;
  checkpoint: string;
}

export const routeDefinitions: RouteDefinition[] = [
  { path: "/", frameLabel: "01", name: "Inicio público", visualNodeId: "62:348", checkpoint: "W2" },
  { path: "/login", frameLabel: "02", name: "Iniciar sesión", visualNodeId: "62:360", checkpoint: "W2" },
  { path: "/signup", frameLabel: "03", name: "Crear cuenta", visualNodeId: "62:374", checkpoint: "W3" },
  { path: "/signup/verify-email", frameLabel: "04", name: "Verificar el correo", visualNodeId: "62:397", checkpoint: "W3" },
  { path: "/signup/consent", frameLabel: "05", name: "Consentimiento de datos", visualNodeId: "62:410", checkpoint: "W3" },
  { path: "/signup/eps", frameLabel: "06", name: "Vincular la EPS", visualNodeId: "62:425", checkpoint: "W3" },
  { path: "/signup/eps/status", frameLabel: "07", name: "Estado de la afiliación", visualNodeId: "62:444", checkpoint: "W3" },
  { path: "/desktop", frameLabel: "14", name: "Escritorio", visualNodeId: "62:457", checkpoint: "W4" },
  { path: "/medicines", frameLabel: "08", name: "Buscar medicamento", visualNodeId: "62:482", checkpoint: "W4" },
  { path: "/medicines/detail", frameLabel: "09", name: "Detalle y equivalentes", visualNodeId: "62:513", checkpoint: "W4" },
  { path: "/medicines/prescription", frameLabel: "10", name: "Datos de la fórmula", visualNodeId: "62:536", checkpoint: "W4" },
  { path: "/medicines/treatment", frameLabel: "11", name: "Resumen del tratamiento", visualNodeId: "62:566", checkpoint: "W4" },
  { path: "/locations", frameLabel: "12", name: "Buscador de puntos", visualNodeId: "62:593", checkpoint: "W5" },
  { path: "/locations/detail", frameLabel: "13", name: "Ficha y disponibilidad del punto", visualNodeId: "62:627", checkpoint: "W5" },
  { path: "/account", frameLabel: "15", name: "Cuenta y privacidad", visualNodeId: "62:661", checkpoint: "W6" },
];

const realScreens: Record<string, ReactNode> = {
  "/": <PublicHomePage />,
  "/login": <LoginPage />,
  "/signup": <SignupScreen />,
  "/signup/verify-email": <VerifyEmailScreen />,
  "/signup/consent": <ConsentScreen />,
  "/signup/eps": <EpsScreen />,
  "/signup/eps/status": <EpsStatusScreen />,
  "/desktop": <DashboardPage />,
  "/medicines": <MedicineSearchPage />,
  "/medicines/detail": <MedicineDetailPage />,
  "/medicines/prescription": <PrescriptionPage />,
  "/medicines/treatment": <TreatmentPage />,
  "/locations": <LocationsPage />,
  "/locations/detail": <LocationDetailPage />,
  "/account": <AccountPage />,
};

export const appRouter = createBrowserRouter(
  routeDefinitions.map((route) => ({
    path: route.path,
    element: realScreens[route.path] ?? (
      <PlaceholderScreen
        frameLabel={route.frameLabel}
        name={route.name}
        visualNodeId={route.visualNodeId}
        checkpoint={route.checkpoint}
      />
    ),
  })),
);
