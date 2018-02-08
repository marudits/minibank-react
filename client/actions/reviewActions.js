export function addReview(bankId, reviewerName, reviewerEmail, text, star){
	return {
		type: 'REVIEW_ADD',
		bankId,
		reviewerName,
		reviewerEmail,
		text,
		star
	}
}