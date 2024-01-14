export function LanguageDropDown() {
    <DropdownButton id="dropdown-button-dark-example2" variant="dark" className="mt-2" data-bs-theme="dark" title="Theme">
        <Dropdown.Item onClick={() => setSelectedTheme(vscodeDark)}>VSCodeDark</Dropdown.Item>
        <Dropdown.Item onClick={()=>setSelectedTheme(sublime)}>Sublime</Dropdown.Item>
        <Dropdown.Item onClick={()=>setSelectedTheme(dracula)}>Dracula</Dropdown.Item>
        <Dropdown.Item onClick={()=>setSelectedTheme(eclipse)}>Eclipse</Dropdown.Item>
        <Dropdown.Item onClick={()=>setSelectedTheme(monokai)}>Monokai</Dropdown.Item>
        <Dropdown.Item onClick={()=>setSelectedTheme(quietlight)}>Quietlight</Dropdown.Item>   
    </DropdownButton>

    
}