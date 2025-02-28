/**
 * @schema AdminCreateShipment
 * type: object
 * description: The shipment's details.
 * x-schemaName: AdminCreateShipment
 * required:
 *   - labels
 * properties:
 *   labels:
 *     type: array
 *     description: The shipment's labels.
 *     items:
 *       type: object
 *       description: A shipment label's details.
 *       required:
 *         - tracking_number
 *         - tracking_url
 *         - label_url
 *       properties:
 *         tracking_number:
 *           type: string
 *           title: tracking_number
 *           description: The label's tracking number.
 *         tracking_url:
 *           type: string
 *           title: tracking_url
 *           description: The label's tracking URL.
 *         label_url:
 *           type: string
 *           title: label_url
 *           description: The label's URL.
 * 
*/

