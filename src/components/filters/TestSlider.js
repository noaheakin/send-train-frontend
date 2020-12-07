import React from 'react';

const SortSelector = () => {
    return (
        <select class="ui dropdown" placeholder='Sort Climbs'>
          <option value={1}><i class="small star outline icon"/>Highest Quality</option>
          <option value={2}><i class="small star icon"/>Lowest Quality</option>
          <option value={3}><i class="sort amount down icon"/>Most Popular</option>
          <option value={4}><i class="sort amount up icon"/>Least Popular</option>
          <option value={5}><i class="sort alphabet down icon"/>A to Z</option>
          <option value={6}><i class="sort alphabet up icon"/>Z to A</option>
        </select>
    )
}

export default SortSelector