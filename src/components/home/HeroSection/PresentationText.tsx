'use client';
import { Separator } from "@/components/utils/Separator";
import { FeatureCard } from "./FeatureCard";
import { Button } from "react-bootstrap";

export function PresentationText() {
  const years = new Date().getFullYear() - 2018;

  return (
    <div className="h-100 d-flex align-items-center">
      <div>
        <article>
          <h6>Me llamo</h6>
          <h1 className="h2">Ofilio Herdocia Aráuz</h1>
          <Separator />
          <p className="lead">
            Y quiero ser tu desarrollador de software de confianza
          </p>
        </article>
        <div className="d-flex gap-3">
          <FeatureCard title="Experiencia" value={`${years} años`} />
          <FeatureCard title="Certificados" value="15+" />
          <FeatureCard title="Proyectos" value="20" />
        </div>
        <div className="mt-4">
          <Button size="lg">Descargar cv</Button>
        </div>
      </div>
    </div>
  );
}
