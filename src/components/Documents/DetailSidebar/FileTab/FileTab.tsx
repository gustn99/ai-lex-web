import { useState } from 'react';

import FileFilter from './FileFilter';

export default function FileTab() {
	const [searchKeyword, setSearchKeyword] = useState('');

	return (
		<div>
			<FileFilter searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword} />
		</div>
	);
}
