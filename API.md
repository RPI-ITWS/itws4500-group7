GET '/api/windVel'
- returns all wind velocity data
- first result is the monthly average wind data for all states
- next 12 results are coordinate representations of the wind velocity at specific points across the mainland US

GET '/api/windVel/:stateID'
- returns wind data for each month of the specified state
- 12 entries reflect an average wind value for each month

GET '/api/surfaceTemp/:stateID'
- returns surface temp data for each month of the specified state
- 12 entries reflect an average temp value for each month
