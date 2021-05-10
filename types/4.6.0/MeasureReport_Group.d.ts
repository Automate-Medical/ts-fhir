import { Extension } from "./Extension";
import { CodeableConcept } from "./CodeableConcept";
import { MeasureReport_Population } from "./MeasureReport_Population";
import { Quantity } from "./Quantity";
import { Element } from "./Element";
import { Period } from "./Period";
import { Range } from "./Range";
import { Duration } from "./Duration";
import { MeasureReport_Stratifier } from "./MeasureReport_Stratifier";
/**
* The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation.
*/
export interface MeasureReport_Group {
    /**
    * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
    */
    id?: string;
    /**
    * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
    */
    extension?: Extension[];
    /**
    * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
    *
    * Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
    */
    modifierExtension?: Extension[];
    /**
    * The meaning of the population group as defined in the measure definition.
    */
    code?: CodeableConcept;
    /**
    * The populations that make up the population group, one for each type of population appropriate for the measure.
    */
    population?: MeasureReport_Population[];
    /**
    * The measure score for this population group, calculated as appropriate for the measure type and scoring method, and based on the contents of the populations defined in the group.
    */
    measureScoreQuantity?: Quantity;
    /**
    * The measure score for this population group, calculated as appropriate for the measure type and scoring method, and based on the contents of the populations defined in the group.
    */
    measureScoreDateTime?: string;
    /**
    * Extensions for measureScoreDateTime
    */
    _measureScoreDateTime?: Element;
    /**
    * The measure score for this population group, calculated as appropriate for the measure type and scoring method, and based on the contents of the populations defined in the group.
    */
    measureScoreCodeableConcept?: CodeableConcept;
    /**
    * The measure score for this population group, calculated as appropriate for the measure type and scoring method, and based on the contents of the populations defined in the group.
    */
    measureScorePeriod?: Period;
    /**
    * The measure score for this population group, calculated as appropriate for the measure type and scoring method, and based on the contents of the populations defined in the group.
    */
    measureScoreRange?: Range;
    /**
    * The measure score for this population group, calculated as appropriate for the measure type and scoring method, and based on the contents of the populations defined in the group.
    */
    measureScoreDuration?: Duration;
    /**
    * When a measure includes multiple stratifiers, there will be a stratifier group for each stratifier defined by the measure.
    */
    stratifier?: MeasureReport_Stratifier[];
}
