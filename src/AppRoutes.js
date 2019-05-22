import React from 'react';



import AGLetterFullPage from './pages/AGLetterFullPage';
import AdvisoryBoardPage from './pages/AdvisoryBoardPage';
import EventsPage from './pages/EventsPage';
import ContactUsPage from './pages/ContactUsPage';
import MeetOurTeamPage from './pages/MeetOurTeamPage';
import ResourcesPage from './pages/ResourcesPage';
import SupportUsPage from './pages/SupportUsPage';
import BecomeAnAllyPage from './pages/BecomeAnAllyPage';
import NewsPage from './pages/NewsPage';
import GalleryPage from './pages/GalleryPage';
import EventPage from './pages/EventPage';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import LobbyFormPage from './pages/LobbyFormPage';
import BlogPage from './pages/BlogPage';
import ScholarshipsPage from './pages/ScholarshipsPage';

import {
    ScrollToTopRoute
} from 'kokolib';

const AppRoutes = (
  <div>

    <ScrollToTopRoute exact path="/" component={HomePage}>
    </ScrollToTopRoute>

    <ScrollToTopRoute exact path="/aboutUs" component={AboutUsPage}>
    </ScrollToTopRoute>

    <ScrollToTopRoute path="/advBoard" component={AdvisoryBoardPage}>
    </ScrollToTopRoute>

    <ScrollToTopRoute exact path="/events" component={EventsPage}>
    </ScrollToTopRoute>

    <ScrollToTopRoute path="/events/:eventId" component={EventPage}>
    </ScrollToTopRoute>

    <ScrollToTopRoute path="/contactus" component={ContactUsPage}>
    </ScrollToTopRoute>

    <ScrollToTopRoute path="/meetOurTeam" component={MeetOurTeamPage}>
    </ScrollToTopRoute>


    <ScrollToTopRoute path="/resources" component={ResourcesPage}>
    </ScrollToTopRoute>

    <ScrollToTopRoute path="/becomeanally" component={BecomeAnAllyPage}>
    </ScrollToTopRoute>

    <ScrollToTopRoute path="/supportus" component={SupportUsPage}>
    </ScrollToTopRoute>

    <ScrollToTopRoute path="/medianews" component={NewsPage}>
    </ScrollToTopRoute>

    <ScrollToTopRoute path="/gallery" component={GalleryPage}>
    </ScrollToTopRoute>

    <ScrollToTopRoute path="/scholarships" component={ScholarshipsPage}>
    </ScrollToTopRoute>

    <ScrollToTopRoute path="/agletterfull" component={AGLetterFullPage}>
    </ScrollToTopRoute>

    <ScrollToTopRoute path="/joinrapidresponseteam" component={LobbyFormPage}>
    </ScrollToTopRoute>

    <ScrollToTopRoute exact path="/news" component={BlogPage}>
    </ScrollToTopRoute>

    <ScrollToTopRoute path="/news/:postId" component={BlogPage}>
    </ScrollToTopRoute>

  </div>
);

export default AppRoutes;
