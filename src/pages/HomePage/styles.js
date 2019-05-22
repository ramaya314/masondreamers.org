const styles = theme => ({
	tileLinkContainer: {
		width: '100%',
		paddingTop: 20,
		paddingBottom: 20,
	},
  outreachButtonContainer: {
		textAlign:"center",
		paddingBottom: 20
	},
  outreachButton: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 19,
    padding: '15px 17px',
    lineHeight: 1.5,
    '&:hover': {
      backgroundColor: '#6cb83a',
			color:"#febe10",
    },
    '&:active': {
      backgroundColor: '#6cb83a',
			color:"#febe10",
    },
  },
});

export default styles;
