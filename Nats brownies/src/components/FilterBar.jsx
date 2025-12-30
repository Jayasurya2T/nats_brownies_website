import '../styles/FilterBar.css';

export function FilterBar({ activeFilter, onFilterChange, sortBy, onSortChange }) {
  return (
    <div className="filter-bar">
      <div className="filter-group">
        <span className="filter-label">Filter:</span>
        <div className="filter-buttons">
          <button
            className={`filter-btn ${activeFilter === 'All' ? 'active' : ''}`}
            onClick={() => onFilterChange('All')}
          >
            All
          </button>
          <button
            className={`filter-btn ${activeFilter === 'Egg' ? 'active' : ''}`}
            onClick={() => onFilterChange('Egg')}
          >
            Egg
          </button>
          <button
            className={`filter-btn ${activeFilter === 'Eggless' ? 'active' : ''}`}
            onClick={() => onFilterChange('Eggless')}
          >
            Eggless
          </button>
        </div>
      </div>
      
      <div className="sort-group">
        <label htmlFor="sort-select" className="sort-label">Sort by:</label>
        <select
          id="sort-select"
          className="sort-select"
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
}

