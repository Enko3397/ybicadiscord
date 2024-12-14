use std::fs::File;
use std::io::{self, Write, Read};

pub fn save_message(message: &str) -> io::Result<()> {
    let mut file = File::create("messages.log")?;
    writeln!(file, "{}", message)?;
    Ok(())
}

pub fn read_messages() -> io::Result<String> {
    let mut file = File::open("messages.log")?;
    let mut content = String::new();
    file.read_to_string(&mut content)?;
    Ok(content)
}
