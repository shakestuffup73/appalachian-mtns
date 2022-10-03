    <select name="mountain" id="mountain-select">
      <option value="Adams">Adams</option>
      <option value="Bond">Bond</option>
      <option value="Bondcliff">Bondcliff</option>
      <option value="Cabot">Cabot</option>
      <option value="Cannon">Cannon</option>
      <option value="Carrigan">Carrigan</option>
      <option value="Carter-Dome">Carter Dome</option>
      <option value="Carter-Middle">Carter Middle</option>
      <option value="Carter-South">Carter South</option>
      <option value="Eisenhower">Eisenhower</option>
      <option value="Field">Field</option>
      <option value="Flume">Flume</option>
      <option value="Galehead">Galehead</option>
      <option value="Garfield">Garfield</option>
      <option value="Hale">Hale</option>
      <option value="Hancock">Hancock</option>
      <option value="Hancock-South">South Hancock</option>
      <option value="Isolation">Isolation</option>
      <option value="Jackson">Jackson</option>
      <option value="Jefferson">Jefferson</option>
      <option value="Kinsman-North">North Kinsman</option>
      <option value="Kinsman-South">South Kinsman</option>
      <option value="Lafayette">Lafayette</option>
      <option value="Liberty">Liberty</option>
      <option value="Lincoln">Lincoln</option>
      <option value="Madison">Madison</option>
      <option value="Monroe">Monroe</option>
      <option value="Moosilauke">Moosilauke</option>
      <option value="Moriah">Moriah</option>
      <option value="Osceola">Osceola</option>
      <option value="Osceola-East">East Osceola</option>
      <option value="Owls-Head">Owl's Head</option>
      <option value="Passaconaway">Passaconaway</option>
      <option value="Pierce">Pierce</option>
      <option value="Tecumseh">Tecumseh</option>
      <option value="Tom">Tom</option>
      <option value="Tripyramid-Middle">Middle Tripyramid</option>
      <option value="Tripyramid-North">North Tripyramid</option>
      <option value="Twin-North">North Twin</option>
      <option value="Twin-South">South Twin</option>
      <option value="Washington">Washington</option>
      <option value="Waumbek">Waumbek</option>
      <option value="West-Bond">West Bond</option>
      <option value="Whiteface">Whiteface</option>
      <option value="Wildcat">Wildcat</option>
      <option value="Wildcat-D">Wildcat-D</option>
      <option value="Willey">Willey</option>
      <option value="Zealand">Zealand</option>


      <% if (user.profile._id.equals(climb.owner._id)) { %>
        <form action="/climbs/<%= climb._id %>/reviews/<%= review._id %>?_method=DELETE" method="POST">
          <button type="submit">Delete Review</button>
        </form>
      <% } %>
      <% if (user.profile._id.equals(review.reviewer._id)) { %>
        <a href="/climbs/<%= climb._id %>/reviews/<%= review._id %>/edit">
          <button id="edit-btn">Edit Review</button>
        </a>
      <% } %>




This is for laterrrrr

<form id="add-climb-to-my-list" action="/profiles/<%= profile._id %>" method="POST">
    <select name="climbId">
      <% climbs.forEach(climb => { %>
        <option value="<%= climb._id %>"> <%= climb.name %> </option>
      <% }) %>
    </select>
    <button type="submit">Add Climb</button>
  </form>