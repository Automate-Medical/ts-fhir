import { id } from "./id";
import { Meta } from "./Meta";
import { uri } from "./uri";
import { Element } from "./Element";
import { code } from "./code";
import { Narrative } from "./Narrative";
import { ResourceList } from "./ResourceList";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Reference } from "./Reference";
import { Period } from "./Period";
import { dateTime } from "./dateTime";
import { CoverageEligibilityResponse_Insurance } from "./CoverageEligibilityResponse_Insurance";
import { CodeableConcept } from "./CodeableConcept";
import { CoverageEligibilityResponse_Error } from "./CoverageEligibilityResponse_Error";
/**
* This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource.
*/
export interface CoverageEligibilityResponse {
    /**
    * This is a CoverageEligibilityResponse resource
    */
    resourceType: "CoverageEligibilityResponse";
    /**
    * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
    */
    id?: id;
    /**
    * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
    */
    meta?: Meta;
    /**
    * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
    */
    implicitRules?: uri;
    /**
    * Extensions for implicitRules
    */
    _implicitRules?: Element;
    /**
    * The base language in which the resource is written.
    */
    language?: code;
    /**
    * Extensions for language
    */
    _language?: Element;
    /**
    * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
    */
    text?: Narrative;
    /**
    * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, nor can they have their own independent transaction scope.
    */
    contained?: ResourceList[];
    /**
    * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
    */
    extension?: Extension[];
    /**
    * May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
    *
    * Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
    */
    modifierExtension?: Extension[];
    /**
    * A unique identifier assigned to this coverage eligiblity request.
    */
    identifier?: Identifier[];
    /**
    * The status of the resource instance.
    */
    status?: code;
    /**
    * Extensions for status
    */
    _status?: Element;
    /**
    * Code to specify whether requesting: prior authorization requirements for some service categories or billing codes; benefits for coverages specified or discovered; discovery and return of coverages for the patient; and/or validation that the specified coverage is in-force at the date/period specified or 'now' if not specified.
    */
    purpose?: code[];
    /**
    * Extensions for purpose
    */
    _purpose?: Element[];
    /**
    * The party who is the beneficiary of the supplied coverage and for whom eligibility is sought.
    */
    patient: Reference;
    /**
    * The date or dates when the enclosed suite of services were performed or completed.
    */
    servicedDate?: string;
    /**
    * Extensions for servicedDate
    */
    _servicedDate?: Element;
    /**
    * The date or dates when the enclosed suite of services were performed or completed.
    */
    servicedPeriod?: Period;
    /**
    * The date this resource was created.
    */
    created?: dateTime;
    /**
    * Extensions for created
    */
    _created?: Element;
    /**
    * The provider which is responsible for the request.
    */
    requestor?: Reference;
    /**
    * Reference to the original request resource.
    */
    request: Reference;
    /**
    * The outcome of the request processing.
    */
    outcome?: code;
    /**
    * Extensions for outcome
    */
    _outcome?: Element;
    /**
    * A human readable description of the status of the adjudication.
    */
    disposition?: string;
    /**
    * Extensions for disposition
    */
    _disposition?: Element;
    /**
    * The Insurer who issued the coverage in question and is the author of the response.
    */
    insurer: Reference;
    /**
    * Financial instruments for reimbursement for the health care products and services.
    */
    insurance?: CoverageEligibilityResponse_Insurance[];
    /**
    * A reference from the Insurer to which these services pertain to be used on further communication and as proof that the request occurred.
    */
    preAuthRef?: string;
    /**
    * Extensions for preAuthRef
    */
    _preAuthRef?: Element;
    /**
    * A code for the form to be used for printing the content.
    */
    form?: CodeableConcept;
    /**
    * Errors encountered during the processing of the request.
    */
    error?: CoverageEligibilityResponse_Error[];
}
