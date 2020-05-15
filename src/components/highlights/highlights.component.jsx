import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectPosts } from '../../redux/posts/posts.selectors';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Section from '../section/section.component';
import SecondaryHeading from '../typography/secondary-heading/secondary-heading.component';
import Column from '../grid/column/column.component';
import Card from '../card/card.component';
import Post from '../post/post.component';
import PostCreate from '../post/post-create/post-create.component';

import './highlights.styles.scss';

const Highlights = ({ mode, posts }) => (
  <Section>
    <SecondaryHeading>Highlights</SecondaryHeading>
    <TransitionGroup
      key={mode ? 'dashboard_mode_posts' : 'edit_mode_posts'}
      className="row"
    >
      {posts
        ? mode
          ? posts
              .filter((post) => post.isPublished)
              .slice(-8)
              .map((post) => (
                <Column key={post.id} col="col-3 col-4-md col-6-sm col-12-xs">
                  <Card isPost={true}>
                    <Post {...post} mode={mode} />
                  </Card>
                </Column>
              ))
          : posts.slice(-11).map((post) => (
              <CSSTransition
                key={post.id}
                timeout={200}
                classNames="highlights__animation"
              >
                <Column col="col-3 col-4-md col-6-sm col-12-xs">
                  <Card key={post.id} isPost={true}>
                    <Post {...post} mode={mode} />
                  </Card>
                </Column>
              </CSSTransition>
            ))
        : null}
      {!mode ? (
        <Column col="col-3 col-4-md col-6-sm col-12-xs">
          <Card isPost={true}>
            <PostCreate />
          </Card>
        </Column>
      ) : null}
    </TransitionGroup>
  </Section>
);

const mapStateToProps = createStructuredSelector({
  posts: selectPosts,
});

export default connect(mapStateToProps)(Highlights);
