import { Point } from "./Point";

export interface Vehicle { //export => export ederek dışa aktarım sağlandı. dısarıya açıldılar
    travelTo(point: Point): void;
}