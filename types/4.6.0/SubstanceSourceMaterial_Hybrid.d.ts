import { Extension } from "./Extension";
import { Element } from "./Element";
import { CodeableConcept } from "./CodeableConcept";
/**
* Source material shall capture information on the taxonomic and anatomical origins as well as the fraction of a material that can result in or can be modified to form a substance. This set of data elements shall be used to define polymer substances isolated from biological matrices. Taxonomic and anatomical origins shall be described using a controlled vocabulary as required. This information is captured for naturally derived polymers ( . starch) and structurally diverse substances. For Organisms belonging to the Kingdom Plantae the Substance level defines the fresh material of a single species or infraspecies, the Herbal Drug and the Herbal preparation. For Herbal preparations, the fraction information will be captured at the Substance information level and additional information for herbal extracts will be captured at the Specified Substance Group 1 information level. See for further explanation the Substance Class: Structurally Diverse and the herbal annex.
*/
export interface SubstanceSourceMaterial_Hybrid {
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
    * The identifier of the maternal species constituting the hybrid organism shall be specified based on a controlled vocabulary. For plants, the parents aren’t always known, and it is unlikely that it will be known which is maternal and which is paternal.
    */
    maternalOrganismId?: string;
    /**
    * Extensions for maternalOrganismId
    */
    _maternalOrganismId?: Element;
    /**
    * The name of the maternal species constituting the hybrid organism shall be specified. For plants, the parents aren’t always known, and it is unlikely that it will be known which is maternal and which is paternal.
    */
    maternalOrganismName?: string;
    /**
    * Extensions for maternalOrganismName
    */
    _maternalOrganismName?: Element;
    /**
    * The identifier of the paternal species constituting the hybrid organism shall be specified based on a controlled vocabulary.
    */
    paternalOrganismId?: string;
    /**
    * Extensions for paternalOrganismId
    */
    _paternalOrganismId?: Element;
    /**
    * The name of the paternal species constituting the hybrid organism shall be specified.
    */
    paternalOrganismName?: string;
    /**
    * Extensions for paternalOrganismName
    */
    _paternalOrganismName?: Element;
    /**
    * The hybrid type of an organism shall be specified.
    */
    hybridType?: CodeableConcept;
}
