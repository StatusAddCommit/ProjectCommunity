import React from "react";

class DetailsWidgetCalendar extends React.Component {
  render() {
    return (
      <div className="widget-sidebar widget_calendar">
        <h4 className="widget-title">Calendar</h4>
        <div id="calendar_wrap" className="calendar_wrap">
          <table id="wp-calendar">
            <caption>January 2017</caption>
            <thead>
              <tr>
                <th scope="col" title="Monday">
                  M
                </th>
                <th scope="col" title="Tuesday">
                  T
                </th>
                <th scope="col" title="Wednesday">
                  W
                </th>
                <th scope="col" title="Thursday">
                  T
                </th>
                <th scope="col" title="Friday">
                  F
                </th>
                <th scope="col" title="Saturday">
                  S
                </th>
                <th scope="col" title="Sunday">
                  S
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={6} className="pad">
                   
                </td>
                <td>1</td>
              </tr>
              <tr>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td id="today">5</td>
                <td>6</td>
                <td>7</td>
                <td>8</td>
              </tr>
              <tr>
                <td>9</td>
                <td>10</td>
                <td>11</td>
                <td>
                  <a href="#">12</a>
                </td>
                <td>13</td>
                <td>14</td>
                <td>15</td>
              </tr>
              <tr>
                <td>16</td>
                <td>17</td>
                <td>18</td>
                <td>19</td>
                <td>20</td>
                <td>21</td>
                <td>22</td>
              </tr>
              <tr>
                <td>23</td>
                <td>24</td>
                <td>25</td>
                <td>26</td>
                <td>27</td>
                <td>28</td>
                <td>29</td>
              </tr>
              <tr>
                <td>30</td>
                <td>31</td>
                <td className="pad" colSpan={5}>
                   
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={3} id="prev">
                  <a href="#" />
                </td>
                <td className="pad"> </td>
                <td colSpan={3} id="next" className="pad">
                  <a href="#" />
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

export default DetailsWidgetCalendar;
