import { Separator } from "@/components/utils/Separator"

export function PresentationText(){
    return (
        <div className="h-100 d-flex align-items-center">
        <article>
          <h6>Me llamo</h6>
          <h1 className="h2">Ofilio Herdocia Aráuz</h1>
          <Separator />
          <p className="lead">Y quiero ser tu desarrollador de software de confianza</p>
        </article>
      </div>
    )
}