import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { CollapsibleMenu } from './collapsibleMenu';
import { CourseContentType, UserType } from '../types/proptypes';

/**
 * An activity bulma menu to render on the side of the page.
 *
 * This menu will show all the possible content inside of the page as well as commands to create new content if
 * the user is an administrator.
 *
 * See also: [Bulma Menu](https://bulma.io/documentation/components/menu/).
 */
export const Activities = ({ content, user }) => (
  <aside className="menu">
    <p className="menu-label">
      List of activities
    </p>
    <ul className="menu-list">
      <CollapsibleMenu title={<Link to="/lectures">Lectures</Link>}>
        {content.lectures.map(lecture => (
          <li key={lecture.id}>
            <Link to={`/lectures/${lecture.id}`}>
              {lecture.unit}
            </Link>
          </li>
        ))}
      </CollapsibleMenu>
      <CollapsibleMenu title={<Link to="/tutorials">Tutorials</Link>}>
        {content.tutorials.map(tutorial => (
          <li key={tutorial.id}>
            <Link to={`/tutorials/${tutorial.id}`}>
              {tutorial.name}
            </Link>
          </li>
        ))}
      </CollapsibleMenu>
      <CollapsibleMenu title={<Link to="/assignments">Assignments</Link>}>
        {content.assignments.map(assignment => (
          <li key={assignment.id}>
            <Link to={`/assignments/${assignment.id}`}>
              {assignment.name}
            </Link>
          </li>
        ))}
      </CollapsibleMenu>
    </ul>
    <p className="menu-label">
      Discussion boards
    </p>
    <ul className="menu-list">
      {content.forums.map(forum => (
        <li key={forum.id} className="is-flex">
          <Link to={`/forums/${forum.id}`} style={{ flex: 1 }}>
            {forum.title}
          </Link>
          <span className="tag is-info">
            {forum.topics.length}
          </span>
        </li>
      ))}
    </ul>
    {user.role === 'admin' && (
      <Fragment>
        <p className="menu-label">
          Instructor options
        </p>
        <ul className="menu-list">
          <li>
            <Link to="/lectures/+">
              <span className="icon is-small">
                <FontAwesomeIcon icon={faPlus} size="sm" />
              </span>
              Add a new lecture
            </Link>
          </li>
          <li>
            <Link to="/tutorials/+">
              <span className="icon is-small">
                <FontAwesomeIcon icon={faPlus} size="sm" />
              </span>
              Add a new tutorial
            </Link>
          </li>
          <li>
            <Link to="/assignments/+">
              <span className="icon is-small">
                <FontAwesomeIcon icon={faPlus} size="sm" />
              </span>
              Add a new assignment
            </Link>
          </li>
        </ul>
      </Fragment>
    )}
  </aside>
);

Activities.propTypes = {
  /**
   * The user currently logged into the application.
   *
   * See the <a data-sb-kind="Components/Complete application">App</a> component documentation for more details.
   */
  user: UserType.isRequired,

  /**
   * The course content available on the website.
   *
   * See the <a data-sb-kind="Components/Complete application">App</a> component documentation for more details.
   */
  content: CourseContentType.isRequired,
};
