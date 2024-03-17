// @ts-check
import exec from 'shelljs.exec'

/**
 * Switch function
 * @param {{ outlet: any, action: any }} data The outlet to switch and the value to put
 * @returns boolean Success
 */
export const switchFn = ({ outlet, action }) => {
	if (
		['1', '2', '3', '4', '5'].includes(outlet)
		&&
		['ON', 'OFF'].includes(action)
	) {
		exec(`./run.sh ${outlet} ${action}`, { silent: true })
		return true
	} else {
		return false
	}
}
