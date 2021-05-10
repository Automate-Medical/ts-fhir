import { Extension } from "./Extension";
import { positiveInt } from "./positiveInt";
import { Element } from "./Element";
import { CodeableConcept } from "./CodeableConcept";
import { Period } from "./Period";
import { Address } from "./Address";
import { Reference } from "./Reference";
import { Quantity } from "./Quantity";
import { Money } from "./Money";
import { decimal } from "./decimal";
import { Claim_Detail } from "./Claim_Detail";
/**
* A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement.
*/
export interface Claim_Item {
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
    * A number to uniquely identify item entries.
    */
    sequence?: positiveInt;
    /**
    * Extensions for sequence
    */
    _sequence?: Element;
    /**
    * CareTeam members related to this service or product.
    */
    careTeamSequence?: positiveInt[];
    /**
    * Extensions for careTeamSequence
    */
    _careTeamSequence?: Element[];
    /**
    * Diagnosis applicable for this service or product.
    */
    diagnosisSequence?: positiveInt[];
    /**
    * Extensions for diagnosisSequence
    */
    _diagnosisSequence?: Element[];
    /**
    * Procedures applicable for this service or product.
    */
    procedureSequence?: positiveInt[];
    /**
    * Extensions for procedureSequence
    */
    _procedureSequence?: Element[];
    /**
    * Exceptions, special conditions and supporting information applicable for this service or product.
    */
    informationSequence?: positiveInt[];
    /**
    * Extensions for informationSequence
    */
    _informationSequence?: Element[];
    /**
    * The type of revenue or cost center providing the product and/or service.
    */
    revenue?: CodeableConcept;
    /**
    * Code to identify the general type of benefits under which products and services are provided.
    */
    category?: CodeableConcept;
    /**
    * When the value is a group code then this item collects a set of related claim details, otherwise this contains the product, service, drug or other billing code for the item.
    */
    productOrService: CodeableConcept;
    /**
    * Item typification or modifiers codes to convey additional context for the product or service.
    */
    modifier?: CodeableConcept[];
    /**
    * Identifies the program under which this may be recovered.
    */
    programCode?: CodeableConcept[];
    /**
    * The date or dates when the service or product was supplied, performed or completed.
    */
    servicedDate?: string;
    /**
    * Extensions for servicedDate
    */
    _servicedDate?: Element;
    /**
    * The date or dates when the service or product was supplied, performed or completed.
    */
    servicedPeriod?: Period;
    /**
    * Where the product or service was provided.
    */
    locationCodeableConcept?: CodeableConcept;
    /**
    * Where the product or service was provided.
    */
    locationAddress?: Address;
    /**
    * Where the product or service was provided.
    */
    locationReference?: Reference;
    /**
    * The number of repetitions of a service or product.
    */
    quantity?: Quantity;
    /**
    * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
    */
    unitPrice?: Money;
    /**
    * A real number that represents a multiplier used in determining the overall value of services delivered and/or goods received. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.
    */
    factor?: decimal;
    /**
    * Extensions for factor
    */
    _factor?: Element;
    /**
    * The quantity times the unit price for an additional service or product or charge.
    */
    net?: Money;
    /**
    * Unique Device Identifiers associated with this line item.
    */
    udi?: Reference[];
    /**
    * Physical service site on the patient (limb, tooth, etc.).
    */
    bodySite?: CodeableConcept;
    /**
    * A region or surface of the bodySite, e.g. limb region or tooth surface(s).
    */
    subSite?: CodeableConcept[];
    /**
    * The Encounters during which this Claim was created or to which the creation of this record is tightly associated.
    */
    encounter?: Reference[];
    /**
    * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
    */
    detail?: Claim_Detail[];
}
