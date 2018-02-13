import { CONFIG } from './config'

export const LABEL = {
	VALIDATION: {
		COMMON: {
			MESSAGE: {
				REQUIRED: "This field is required.",
				NOT_EMPTY: "This field shouldn't be empty",
				FORMAT: "Your input isn't at correct format"
			}
		},
		REVIEW: {
			MESSAGE: {
				MIN_LENGTH: `Minimum ${CONFIG.VALIDATION.REVIEW.MIN_LENGTH} characters`
			}
		}
	}
}