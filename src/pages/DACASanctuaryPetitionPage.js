import React from 'react';

import RaisedButton from '@material-ui/core/RaisedButton'
import ContentCreate from '@material-ui/core/svg-icons/content/create';
import withWidth, {MEDIUM} from '@material-ui/core/utils/withWidth';
import SelectField from '@material-ui/core/SelectField';
import MenuItem from '@material-ui/core/MenuItem';

import Loading from 'react-loading';

import MasonDreamersFrame from '../components/MasonDreamersFrame';
import EnhancedTextField from '../components/EnhancedTextField';

import SwipeableViews from 'react-swipeable-views';



class DACASanctuaryPetitionPage extends React.Component
{

	constructor(props) {
		super(props);
		this.state = {
			fullNameField : '',
			emailField : '',
			organizationField : '',
			iAmSpecifyField: '',
			iamField: '',
			errorDialogOpen : false,
			errorDialogText : '',
                  selectFieldErrorText: '',
			currentView : 0,
                  isLoading: false
		}
		this.validatingInputs = [];
	}

      componentWillMount() {
            window.atVAl = (verified) => {
                  this.setState({humanVerified : verified});
            }
      }

	handleSubmitTap = () => {
		if(this.formIsValid()) {
                  this.setState({isLoading:true});
			this.sendPetition();
		}
	}

      handleSendAnotherTap = () => {
            this.setState({
                  currentView: 0
            });
            this.resetForm();
      }

  	handleIAmSelectChange = (event, index, value) => this.setState({iamField: value});

	sendPetition() {
            let host = window.location.protocol + "//" +
                              window.location.hostname +
                              (window.location.hostname.toLowerCase().indexOf('localhost') >= 0 ? ":4000" :
                                    (window.location.port ? ":" + window.location.port : ""));

            let action = "/SignDacaPetition";

            let parameters = "?fullname=" + encodeURI(this.state.fullNameField) +
                                    "&email=" + encodeURI(this.state.emailField) +
                                    "&organization=" + encodeURI(this.state.organizationField) +
                                    "&iam=" + encodeURI(this.state.iamField) +
                                    "&iamspecific=" + encodeURI(this.state.iAmSpecifyField);

            let fullRequest = host + action + parameters;
            var that = this;

            fetch(fullRequest, {
                  method : "GET",
            }).then(function(res) {
                  if (res.ok) {
                        res.text().then(function(text) {
                              that.setState({isLoading:false});
                              that.setState({currentView: 1});
                              window.scrollTo(0, 0);
                        });
                  } else if (res.status === 401) {
                        that.setState({
                              isLoading:false,
                              errorDialogOpen: true,
                              errorDialogText: 'Oops! You are not authorized.',
                        });
                  }
            }, function(e) {
                  console.log(e);
                  that.setState({
                        isLoading:false,
                        errorDialogOpen: true,
                        errorDialogText: "Error submitting form: " + e,
                  });
            });
	}

	resetForm() {
		this.setState({
			fullNameField : '',
			emailField : '',
			organizationField : '',
			iAmSpecifyField: '',
                  selectFieldErrorText: '',
			iamField: '',
		});
	}

	handleTextFieldChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
            this.setState({
                  selectFieldErrorText: (e.target.value == null || e.target.value.length <= 0) ?
                                                'This field is required' : '',
            })
	}

	registerValidatingInput = (inputField) => {
    	this.validatingInputs.indexOf(inputField) < 0 && this.validatingInputs.push(inputField);
	}

	handleToggleErrorDialog = () => {
		this.setState(prevState => ({errorDialogOpen: !prevState.errorDialogOpen}));
	};

	formIsValid() {
		let validForm = true;
		this.validatingInputs.forEach(function(input) {
			if(!input.fieldIsValid()){
				validForm = false;
			}
		});

            if(this.state.iamField.length <= 0) {
                  this.setState({
                        selectFieldErrorText: 'This field is required',
                  });
                  validForm = false;
            }

		return validForm;
	}

	getStyles() {
		const styles = {
			mainBody: {
				font: '17px/1 "Oxygen", sans-serif',
				color: '#7c7c7c',
			},
			petitionTitle: {
				fontWeight: 'bold',
			},
			adminPersonContainer: {
                        fontSize: 14
			},
			adminPersonName: {
				fontWeight: 'bold',
			},
			adminPersonPosition: {
				fontWeight: 'bold',
				fontStyle: 'italic',
				paddingLeft: '5px'
			},
			adminPersonLocation: {
				paddingLeft: '5px'
			},
			presidentaDiv: {
				fontWeight: 'bold',
				display: 'inline-block',
			},
                  thirdOrgColumn: {
                        verticalAlign: 'top',
                        display: (this.props.width < MEDIUM ? "none" : "")
                  },
                  overflowOrgDiv: {
                        paddingTop:10,
                        display: (this.props.width >= MEDIUM ? "none" : "")
                  },
                  orgDiv: {
                        paddingTop:10,
                  },
                  orgColumn: {
                        verticalAlign: 'top',
                  },
                  errorBox: {
                        fontWeight:'bold',
                        color: 'red',
                        textAlign:'center',
                        paddingBottom: 15
                  }
		}
		return styles;
	}

	render() {

    	const styles = this.getStyles();

		return(
      		<MasonDreamersFrame>
                        <SwipeableViews index={this.state.currentView}>
                              {this.state.currentView === 0 &&
                                    <div style={{overflow:"hidden"}}>

            				<h1 style={styles.petitionTitle}>
            					Request to maintain in-state tuition rates for qualifying DACAmented students and creating a sanctuary campus at George Mason University
            				</h1>
            				<div style={styles.adminPersonContainer}>
            					<span style={styles.adminPersonName}>
            						Ángel Cabrera,
            					</span>
            					<span style={styles.adminPersonPosition}>
            						President
            					</span>
            					<span style={styles.adminPersonLocation}>
            						George Mason University
            					</span>
            				</div>
            				<div style={styles.adminPersonContainer}>
            					<span style={styles.adminPersonName}>
            						S. David Wu,
            					</span>
            					<span style={styles.adminPersonPosition}>
            						Provost and Executive Vice President of Academic Affairs
            					</span>
            					<span style={styles.adminPersonLocation}>
            						George Mason University
            					</span>
            				</div>
            				<div style={styles.adminPersonContainer}>
            					<span style={styles.adminPersonName}>
            						Jennifer Wagner Davis,
            					</span>
            					<span style={styles.adminPersonPosition}>
            						 Senior Vice President for Administration and Finance
            					</span>
            					<span style={styles.adminPersonLocation}>
            						 George Mason University
            					</span>
            				</div>
            				<div style={styles.adminPersonContainer}>
            					<span style={styles.adminPersonName}>
            						 Rose Pascarell,
            					</span>
            					<span style={styles.adminPersonPosition}>
            						 Vice President of University Life
            					</span>
            					<span style={styles.adminPersonLocation}>
            						 George Mason University
            					</span>
            				</div>
            				<div style={styles.adminPersonContainer}>
            					<span style={styles.adminPersonName}>
            						Respective College Deans
            					</span>
            					<span style={styles.adminPersonLocation}>
            						 George Mason University
            					</span>
            				</div>
            				<div style={styles.adminPersonContainer}>
            					<span style={styles.adminPersonName}>
            						President’s Council
            					</span>
            					<span style={styles.adminPersonLocation}>
            						 George Mason University
            					</span>
            				</div>

            				<br />

            				<div>
            					On the night of November 8, 2016, Donald J. Trump became the president-elect of the United States of America. Since then,
            					various initiatives and reactions have sprung up throughout the country in an effort to protect and defend respective underrepresented
            					 groups living in the United States. Among the most predominant groups defended have been the undocumented population, more specifically
            					  undocumented students - otherwise known as “DREAMers.”
            				</div>

            				<br />

            				<div style={{paddingLeft: 25, fontSize: 12}}>
            					<b>About DREAMers and DACA.</b> According to the
            					<a className="masonDreamerLink" href="https://www.americanimmigrationcouncil.org/research/who-and-where-dreamers-are-revised-estimates" target="_blank">
            						American Immigration Council
            					</a>
            					, DREAMers are undocumented or unauthorized youth who were
            					 brought to the U.S. as children. In 2012, through an executive action under President Barack Obama,
            					 <a className="masonDreamerLink" href="https://www.whitehouse.gov/the-press-office/2012/06/15/remarks-president-immigration" target="_blank" >
            					 	Deferred Action for Childhood Arrivals (DACA)
            					 </a>
            					  provided this segment of the population a temporary relief from deportation and though they
        					    did not attain a lawful status, this measure allowed many of them to work legally, drive and pursue a higher education.
        					    Based upon respective state discretions, it allowed qualifying approved DACAmented youth to attain a temporary work authorization,
        					     temporary driver licenses, and potential in-state tuition under various criteria. According to
        					     <a className="masonDreamerLink" href=" https://www.uscis.gov/tools/reports-studies/immigration-forms-data/data-set-form-i-821d-deferred-action-childhood-arrivals" target="_blank" >
        					     	fiscal year reports from U.S. Citizenship and Immigration Services (USCIS)
        					     </a>
        					     , over 800,000 undocumented individuals have been approved and currently hold this status.
            					 More information on the guidelines, application process and corresponding fees associated with DACA is available on the
            					 <a className="masonDreamerLink" href="https://www.uscis.gov/humanitarian/consideration-deferred-action-childhood-arrivals-daca" target="_blank" >
            					 	USCIS website.
            					 </a>
            				</div>

            				<br />

            				<div style={{paddingLeft: 25, fontSize: 12}}>
      	      				<b>About the new presidency & expected impact on undocumented students.</b>
      	      				 Based on the 2016 presidential race and platforms presented by then, presidential candidate, Donald J. Trump,
      	      				 there is substantial reason to believe undocumented students will be negatively impacted by the new administration. Based on the
      	      				 <a className="masonDreamerLink" href="https://www.donaldjtrump.com/policies/immigration/" target="_blank">
      	      				 	policy overviews
      	      				 </a>
      	      				       &nbsp; he has provided/promised to the general public, President-elect Trump is expected to terminate at least two of President Obama’s
      	      				  current executive actions upon taking office. Meaning, programs such as DACA are at high risk of termination, thus potentially
      	      				  leaving millions of current and prospective college students unable to access higher education and legal work.
            				</div>

            				<br />

            				<div style={{paddingLeft: 25, fontSize: 12}}>

      	      				<b>About Mason DREAMers.</b>
      	      				 A nonpartisan student organization with a mission to create a more inclusive environment for undocumented students through education and advocacy since 2011.
      	      				  More information on the organization can be found at
      	      				  <a className="masonDreamerLink" href="http://www.masondreamers.org/" target="_blank" >
      	      				  	www.masondreamers.org.
      	      				  </a>

            				</div>

            				<br />

            				<div style={{fontWeight:'bold'}} >
      						As a result of these anticipated presidential measures, the following petition requests that George Mason University seek to
      						become a well-being university for DREAMers by maintaining in-state tuition rates for current and applicable DACAmented
      						students and protect them by becoming a sanctuary school.
            				</div>

            				<br />

            				<hr />

            				<br />

            				<div>
            					<b>To current George Mason University administration, councils, and college deans:</b>
            				</div>
            				<br />
            				<div>
            					Taking into account the threat that has emerged for a current segment of the student
            					population based on the prospective new administration expected to take office this
            					upcoming January 20, 2017, Mason DREAMers along with various current and prospective students, faculty,
            					and community members, respectfully request that George Mason University’s (GMU) administration and respective
            					officials push forth efforts to maintain an in-state tuition rate for current and qualifying DACAmented students.
            					 Furthermore, we encourage a serious consideration of publicly becoming a sanctuary campus for undocumented students.
            				</div>
            				<br />
            				<div>
            					Though we understand that the possibility of the later request may be implausible, we believe that George Mason University
            					 has the responsibility to hold true and obey
            					 <a className="masonDreamerLink" href="http://www2.ed.gov/policy/gen/guid/fpco/ferpa/index.html" target="_blank" >
            					 	The Family Educational Rights and Privacy Act (FERPA)
            					 </a>
            					  when dealing with the enrollment
            					 of undocumented students. Furthermore, we believe it is even more possible for administration and corresponding university officials to
            					 enable current and prospective DACAmented students to maintain and pay in-state tuition rates. The following are reasons for why George
            					 Mason University should opt to act on the above measures:
            				</div>

            				<ul>
      	      				<li>
      							First and foremost, GMU has in the past, time and time again expressed a commitment to foster a culture of inclusion and
      							belonging within its community. Such cannot be the case if they allow a portion of their current student population to forfeit
      							their education not based on a weak academic record but rather an immigrant status.
      	      				</li>

      	      				<li>
      	      					Due to its diversity, proximity, and commuter friendly environment, GMU is likely to have among the most undocumented students
      	      					currently enrolled than most other schools in the state of Virginia (i.e. From 2015-2016 it is estimated that 300 students with
      	      					DACA enrolled.  However this figure does not include students with prior DACA enrollment from 2012-2014, nor does it completely
      	      					represent undocumented students or those between visa statuses. As a result, we estimate the figure to be much larger).
      	      				</li>

      	      				<li>
      		      				Additionally, GMU has demonstrated to have a welcoming community that has expressed a growing interest and support for the current
      		      				undocumented population. In the last two years, over 1,000 community members have taken part in immigration seminars, outreach initiatives,
      		      				and/or UndocuAlly trainings.
      	      				</li>

      	      				<li>
      	      					Thanks to committed GMU student organizations that have developed various initiatives to support underrepresented groups (i.e. Mason DREAMers),
      	      					George Mason University has elevated its reputation and became a model university for other institutions like Virginia Tech,
      	      					Virginia Commonwealth University, University of Virginia, Georgetown University, etc. to follow.
      	      				</li>

      	      				<li>
      	      					Other universities have already begun to take preventive measures to protect their undocumented student populations, including: Brown
      	      					University, Columbia University, University of California - Berkeley, Harvard University, New York University, Northwestern University,
      	      					Pomona College, University of Notre Dame, University of Pennsylvania, Yale University and more.
      	      				</li>
            				</ul>
            				<br />
            				<div>
            					We understand that whether an undocumented student is assigned in-state or out-of-state tuition is not solely based on the individual public
            					institution’s discretion. If George Mason University needs to notify corresponding parties that they will be subject to an out-of-state tuition rate,
            					it does not mean it cannot provide and expand institutional support and increase financial assistance that will help maintain an in-state rate for
            					qualifying DACAmented individuals. In other words, expanding the scholarship list available for current undocumented students or the applicant cap for
            					funds such as the Stay Mason Support Fund, could greatly help cover the difference for many students who would otherwise be subject to an out-of-state rate.
            					For example, based on academic record, financial need or merit, undocumented/DACAmented students could be selected to still receive enough institutional
            					support to cover partial/entire semesters or years while studying at George Mason University.
            				</div>
            				<br />
            				<div>
            					We ask that you consider the above possibilities and join in support of your current and prospective students. Have no doubt that
            					taking action on this matter will serve as testament of George Mason’s commitment to student well-being and belonging.
            					You will not stand alone, for other universities and students will stand with you. As a public institution that strives
            					to put education first and truly seeks to become a “university for the world,” we believe George Mason University
            					administration and school officials have a clear present duty and responsibility to its student population first and
            					foremost. Please take into account that as current and prospective students, faculty, alumni, and community members we are
            					attempting to do our share in helping transform George Mason University. Now it is up to you as administration, councils and
            					deans to push  forth and help make George Mason University into the leader of initiatives like these that will help it become an
            					institution for all others to follow on a national scale.
            				</div>

            				<br />
            				<div>
            					We thank you in advance for your time and consideration.
            				</div>
            				<br />
            				<br />
            				<br />
            				<div>
            					<b>Sincerely,</b>
            				</div>
            				<br />

            				<table style={{width:'100%'}} cellPadding="0" cellSpacing="0" >
                                          <tbody>
                  					<tr>
                  						<td style={{width:'50%'}} >
            			      				<div style={styles.presidentaDiv} >
            			      					Ana Tobar <br />
            			      					Internal President, Mason DREAMers
            			      				</div>
                  						</td>
                  						<td style={{width:'50%', paddingLeft:'10px'}}>
            			      				<div style={styles.presidentaDiv} >

            			      					Danna Chavez Calvi <br />
            			      					External President, Mason DREAMers
            			      				</div>
                  						</td>
                  					</tr>
                                          </tbody>
            				</table>

            				<br />
                                    <br />

            				<div style={{fontStyle:'italic'}}>
            					<div>
      	      					<b>
      	      						Public support on this petition has been received from the following organizations and individuals:
      	      					</b>
            					</div>
                                          <div style={{fontSize:14}}>
                                                <table>
                                                      <tbody>
                                                            <tr>
                                                                  <td style={styles.orgColumn}>
                                                                        <div style={styles.orgDiv}>Alpha Delta Chapter of La Unidad Latina, <br />Lambda Upsilon Lambda Fraternity, Incorporated</div>
                                                                        <div style={styles.orgDiv}>Filipino Cultural Association</div>
                                                                        <div style={styles.orgDiv}>Black Student Association</div>
                                                                        <div style={styles.orgDiv}>Students Against Israeli Apartheid</div>
                                                                        <div style={styles.orgDiv}>GMU Student Power</div>
                                                                        <div style={styles.orgDiv}>Iota Alpha Chapter of Alpha Phi Alpha Fraternity, Incorporated</div>
                                                                        <div style={styles.orgDiv}>Society of Hispanic Professional Engineers</div>
                                                                        <div style={styles.orgDiv}>First Gen Mason</div>
                                                                        <div style={styles.orgDiv}>Águilas Mentoring Program</div>

                                                                        <div style={styles.overflowOrgDiv}>Hispanic Student Association</div>
                                                                        <div style={styles.overflowOrgDiv}>GMU Colony of Phi Iota Alpha Fraternity, Incorporated</div>
                                                                        <div style={styles.overflowOrgDiv}>Delta Epsilon Chapter of Lambda Theta Alpha Latin Sorority, Incorporated</div>
                                                                        <div style={styles.overflowOrgDiv}>Korean Student Association</div>

                                                                  </td>
                                                                  <td style={styles.orgColumn}>
                                                                        <div style={styles.orgDiv}>Women of Color In STEM</div>
                                                                        <div style={styles.orgDiv}>Alpha Alpha Chapter of Kappa Phi Lambda Sorority, Incorporated</div>
                                                                        <div style={styles.orgDiv}>Mu Mu Chapter of Kappa Alpha Psi Fraternity, Incorporated</div>
                                                                        <div style={styles.orgDiv}>United Muslim Relief</div>
                                                                        <div style={styles.orgDiv}>Collegiate Black Men</div>
                                                                        <div style={styles.orgDiv}>Honors College Black Ambition</div>
                                                                        <div style={styles.orgDiv}>Mu Omega Chapter of Sigma Gamma Rho Sorority, Incorporated</div>
                                                                        <div style={styles.orgDiv}>Mariposas Mentoring Program</div>
                                                                        <div style={styles.orgDiv}>Indian Student Association</div>

                                                                        <div style={styles.overflowOrgDiv} >Arrows & Aces</div>
                                                                        <div style={styles.overflowOrgDiv}>Multicultural Association of Pre-Health Students</div>
                                                                        <div style={styles.overflowOrgDiv}>Society for Advancement of Chicanos/Latinos and Native Americans in Science</div>
                                                                        <div style={styles.overflowOrgDiv}>Maaza Club</div>
                                                                        <div style={styles.overflowOrgDiv}>TQ Mason</div>
                                                                  </td>
                                                                  <td style={styles.thirdOrgColumn}>
                                                                        <div style={styles.orgDiv}>Hispanic Student Association</div>
                                                                        <div style={styles.orgDiv}>GMU Colony of Phi Iota Alpha Fraternity, Incorporated</div>
                                                                        <div style={styles.orgDiv}>Delta Epsilon Chapter of Lambda Theta Alpha Latin Sorority, Incorporated</div>
                                                                        <div style={styles.orgDiv}>Korean Student Association</div>
                                                                        <div style={styles.orgDiv}>Arrows & Aces</div>
                                                                        <div style={styles.orgDiv}>Multicultural Association of Pre-Health Students</div>
                                                                        <div style={styles.orgDiv}>Society for Advancement of Chicanos/Latinos and Native Americans in Science</div>
                                                                        <div style={styles.orgDiv}>Maaza Club</div>
                                                                        <div style={styles.orgDiv}>TQ Mason</div>
                                                                  </td>
                                                            </tr>
                                                      </tbody>
                                                </table>

                                          </div>
            				</div>

                                    <br />
            				<br />
            				<div style={{fontWeight: 'bold'}}>
            					*Sign your full name (First, Last)
            				</div>
            				<div style={{fontStyle: 'italic', fontSize: 10, paddingLeft:'40px'}} >
            					Please sign this petition ONLY once. For any questions regarding the above please contact Ana Tobar or Danna Chavez Calvi,
            					current presidents of Mason DREAMers at  <a className="masonDreamerLink" href="mailto:gmumasondreamers@gmail.com" > gmumasondreamers@gmail.com</a>
            				</div>

      				    <EnhancedTextField name="fullNameField"
      				    	value={this.state.fullNameField}
      				    	hintText="First Name, Last Name"
      				    	floatingLabelText="First Name, Last Name"
      				    	isRequired={true}
      						fullWidth={true}
      				    	requiredErrorText="Your full name is required"
      				    	onChange={this.handleTextFieldChange}
      				    	onFormRegister={this.registerValidatingInput}/>


      			        <SelectField
      			          floatingLabelText="I am..."
      			          value={this.state.iamField}
      			          onChange={this.handleIAmSelectChange}
                                    style={{width:"300px"}}
                                    errorText={this.state.selectFieldErrorText}>
      			          <MenuItem value={"Current GMU student"} primaryText="Current GMU student" />
      			          <MenuItem value={"Prospective GMU student"} primaryText="Prospective GMU student" />
      			          <MenuItem value={"GMU Faculty member/professor"} primaryText="GMU Faculty member/professor" />
      			          <MenuItem value={"GMU Alumni"} primaryText="GMU Alumni" />
      			          <MenuItem value={"Community Member"} primaryText="Community Member" />
      			          <MenuItem value={"Other: Please specify"} primaryText="Other: Please specify" />
      			        </SelectField>


      					{this.state.iamField === "Other: Please specify" &&
      					    <EnhancedTextField name="iAmSpecifyField"
      					    	value={this.state.iAmSpecifyField}
      					    	hintText="Other:"
      					    	floatingLabelText="Other:"
      					    	isRequired={false}
      							fullWidth={true}
      					    	onChange={this.handleTextFieldChange}
      					    	onFormRegister={this.registerValidatingInput}/>
      				    }

      				    <EnhancedTextField name="organizationField"
      				    	value={this.state.organizationField}
      				    	hintText="Affiliated Organization"
      				    	floatingLabelText="Affiliated Organization"
      				    	isRequired={false}
      						fullWidth={true}
      				    	onChange={this.handleTextFieldChange}
      				    	onFormRegister={this.registerValidatingInput}/>


      				    <EnhancedTextField name="emailField"
      				    	value={this.state.emailField}
      				    	hintText="Email"
      				    	floatingLabelText="Email"
      						fullWidth={true}
      				    	isRequired={false}
      				    	validationType="email"
      				    	formatErrorText="Please enter a valid email address"
      						onChange={this.handleTextFieldChange}
      				    	onFormRegister={this.registerValidatingInput}/>

                                    <br />
                                    <br />


                                    {this.state.errorDialogOpen &&
                                          <div style={styles.errorBox} >
                                                {this.state.errorDialogText}
                                          </div>
                                    }

                                          <div style={{textAlign:'center', display:(this.state.isLoading ? "" : "none")}}>
                                                <div style={{width:64,height:64,marginLeft:'auto',marginRight:'auto'}}>
                                                      <Loading type='spinningBubbles' color='#cca744' />
                                                </div>
                                          </div>
                                    {!this.state.isLoading &&
                                          <div style={{textAlign:'center'}} >
            						<RaisedButton
            							label="Sign"
            							labelPosition="before"
            							onTouchTap={this.handleSubmitTap}
            							primary={true}
            							icon={<ContentCreate />}/>
            					</div>
                                    }




      			        <br />
      			        <br />
      			        <br />

                                    </div>
                              }

                              <div>
                                    <div style={{fontWeight: 'bold'}} >
                                          The petition has been signed!
                                    </div>
                                    <br />
                                    <div >
                                          Thank you for your support.
                                    </div>

                                    <br />

                                    <RaisedButton
                                          label="Go Back"
                                          labelPosition="before"
                                          onTouchTap={this.handleSendAnotherTap}
                                          primary={true}/>
                              </div>

                        </SwipeableViews>


      		</MasonDreamersFrame>
		);
	}
}


export default withWidth()(DACASanctuaryPetitionPage);
