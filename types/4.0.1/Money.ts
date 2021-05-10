import { Extension } from "./Extension"
import { decimal } from "./decimal"
import { Element } from "./Element"
import { code } from "./code"
/**
* An amount of economic utility in some recognized currency.
*/
export interface Money {
  /**
  * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
  */
  id?: string;

  /**
  * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
  */
  extension?: Extension[];

  /**
  * Numerical value (with implicit precision).
  */
  value?: decimal;

  /**
  * Extensions for value
  */
  _value?: Element;

  /**
  * ISO 4217 Currency Code.
  */
  currency?: code;

  /**
  * Extensions for currency
  */
  _currency?: Element;

}
