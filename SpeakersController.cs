namespace Ndc2017Talk2
{
    public class SpeakersController 
    {
        [HttpGet("/api/speakers")]
        public IList<Speaker> GetSpeakers()
        {
            return new [] { 
                new Speaker() {
                    Id = 1,
                    Name = "David Fowler"
                },
                new Speaker() {
                    Id = 2,
                    Name = "Jon Galloway"
                }
            };
        }
    }
}